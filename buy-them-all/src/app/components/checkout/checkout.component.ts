import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../../shared/services/data.service';
import { CartService } from '../../shared/services/cart.service';

import { IAddress } from '../../shared/models/address';
import { IClient } from '../../shared/models/client';
import { IOrderProduct } from '../../shared/models/order-product';
import { IProduct } from '../../shared/models/product';
import { IShipmentType } from '../../shared/models/shipment-type';
import { IVoivodeship } from '../../shared/models/voivodeship';

import { DataHelper } from '../../shared/utils/data-helper';

const PHONE_REGEX = /^[0-9]{9}$/;
const ZIP_CODE_REGEX = /^[0-9]{2}-[0-9]{3}$/;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  OrderProducts: IOrderProduct[];
  OrderAddress: IAddress;
  OrderClient: IClient;
  OrderShipment: IShipmentType;
  ParcelLockers = new Array<any>();
  ShipmentTypes: IShipmentType[];
  Voivodeships: IVoivodeship[];

  checkoutSubmitted$: Observable<any>;
  parcelChange$: Observable<any>;
  shipmentChange$: Observable<any>;
  shipmentSubmitted$: Observable<any>;

  checkoutForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(PHONE_REGEX)]),
    address: new FormControl('', Validators.required),
    zipCode: new FormControl('', [Validators.required, Validators.pattern(ZIP_CODE_REGEX)]),
    city: new FormControl('', Validators.required),
    voivodeship: new FormControl('', Validators.required),
    parcelLockerCity: new FormControl(''),
    parcelLockerPoint: new FormControl('')
  });

  shipmentForm = new FormGroup({
    shipment: new FormControl('', Validators.required)
  });

  constructor(private dataService: DataService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.dataService.getShipmentTypes()
      .subscribe(ship => this.ShipmentTypes = ship);
    this.dataService.getVoivodeships()
      .subscribe(voiv => this.Voivodeships = voiv);
    this.OrderProducts = this.cartService.retriveCart();

    this.parcelChange$ = this.checkoutForm.controls['parcelLockerCity'].valueChanges;
    this.parcelChange$.subscribe(val => this.dataService.getParcelLockers(this.checkoutForm.get('parcelLockerCity').value)
        .subscribe(parcels => {
          if (this.ParcelLockers.length === 0 && parcels.items.length > 0) {
            this.ParcelLockers = parcels.items;
            this.checkoutForm.get('parcelLockerCity').updateValueAndValidity();
          } else if (this.ParcelLockers.length > 0 && parcels.items.length === 0) {
            this.ParcelLockers = parcels.items;
            this.checkoutForm.get('parcelLockerPoint').reset();
            this.checkoutForm.get('parcelLockerCity').updateValueAndValidity();
          } else {
            this.ParcelLockers = parcels.items;
          }
        }));

    this.shipmentChange$ = this.shipmentForm.controls['shipment'].valueChanges;
    this.shipmentChange$.subscribe(val => this.updateCheckoutValidators(val));

    this.shipmentSubmitted$ = this.shipmentForm.statusChanges;
    this.shipmentSubmitted$.subscribe(status => {
      if (status === 'VALID') {
        this.submitShipment();
      }
    });

    this.checkoutSubmitted$ = this.checkoutForm.statusChanges;
    this.checkoutSubmitted$.subscribe(status => {
      if (status === 'VALID') {
        this.submitCheckout();
      }
    });
  }

  completeOrder() {
    this.cartService.clearCart();
  }

  orderPrice(): number {
    return this.OrderProducts.reduce((a, b) => a + this.productPrice(b.Product), 0);
  }

  productPrice(product: IProduct): number {
    if (product.IsDiscounted) {
      return product.Price - product.Price * product.DiscountPercent / 100;
    }
    return product.Price;
  }

  orderDeliveryTime(): number {
    if (DataHelper.hasValue(this.OrderProducts) && DataHelper.hasValue(this.OrderShipment)) {
      let days: number;
      this.OrderShipment.Code === 'P-PL' ?  days = 5 : days = 2;

      if (this.OrderProducts.some(p => p.Product.Avalibility.Name.indexOf('72') !== -1)) {
        return days + 3;
      } else if (this.OrderProducts.some(p => p.Product.Avalibility.Name.indexOf('48') !== -1)) {
        return days + 2;
      } else if (this.OrderProducts.some(p => p.Product.Avalibility.Name.indexOf('24') !== -1)) {
        return days + 1;
      }
    }
    return 5;
  }

  submitCheckout() {
    if (this.shipmentForm.get('shipment').value !== 'P-LOCK') {
    this.OrderAddress = {
      Id: 0,
      AddressLine: this.checkoutForm.get('address').value,
      City: this.checkoutForm.get('city').value,
      ClientId: 0,
      Voivodeship: this.Voivodeships.find(voiv => voiv.Id === this.checkoutForm.get('voivodeship').value),
      VoivodeshipId: this.checkoutForm.get('voivodeship').value,
      ZipCode: this.checkoutForm.get('zipCode').value
    };
  } else {
    const parcelLocker = this.checkoutForm.get('parcelLockerPoint').value;
    this.OrderAddress = {
      Id: 0,
      AddressLine: parcelLocker.address.line1,
      City: parcelLocker.address_details.city,
      ClientId: 0,
      Voivodeship: this.Voivodeships.find(voiv => voiv.Name === parcelLocker.address_details.province),
      VoivodeshipId: this.Voivodeships.find(voiv => voiv.Name === parcelLocker.address_details.province).Id,
      ZipCode: parcelLocker.address_details.post_code
    };
  }

    this.OrderClient = {
      Id: 0,
      Addresses: [this.OrderAddress],
      Email: this.checkoutForm.get('email').value,
      Name: this.checkoutForm.get('name').value,
      Orders: null,
      Phone: this.checkoutForm.get('phone').value,
      Surname: this.checkoutForm.get('surname').value
    };
  }

  submitShipment() {
    this.OrderShipment = this.ShipmentTypes.find(sh => sh.Code === this.shipmentForm.get('shipment').value);
    this.shipmentForm.markAsTouched();
  }

  updateCheckoutValidators(value: string) {
    if (value === 'P-LOCK') {
      this.checkoutForm.get('address').setValidators(null);
      this.checkoutForm.get('address').updateValueAndValidity();
      this.checkoutForm.get('zipCode').setValidators(null);
      this.checkoutForm.get('zipCode').updateValueAndValidity();
      this.checkoutForm.get('city').setValidators(null);
      this.checkoutForm.get('city').updateValueAndValidity();
      this.checkoutForm.get('voivodeship').setValidators(null);
      this.checkoutForm.get('voivodeship').updateValueAndValidity();
      this.checkoutForm.get('parcelLockerCity')
          .setValidators([Validators.required, () => this.ParcelLockers.length > 0 ? null : {noParcelLockers: true}]);
      this.checkoutForm.get('parcelLockerCity').updateValueAndValidity();
      this.checkoutForm.get('parcelLockerPoint').setValidators(Validators.required);
      this.checkoutForm.get('parcelLockerPoint').updateValueAndValidity();
    } else {
      this.checkoutForm.get('address').setValidators(Validators.required);
      this.checkoutForm.get('address').updateValueAndValidity();
      this.checkoutForm.get('zipCode').setValidators([Validators.required, Validators.pattern(ZIP_CODE_REGEX)]);
      this.checkoutForm.get('zipCode').updateValueAndValidity();
      this.checkoutForm.get('city').setValidators(Validators.required);
      this.checkoutForm.get('city').updateValueAndValidity();
      this.checkoutForm.get('voivodeship').setValidators(Validators.required);
      this.checkoutForm.get('voivodeship').updateValueAndValidity();
      this.checkoutForm.get('parcelLockerCity').setValidators(null);
      this.checkoutForm.get('parcelLockerCity').updateValueAndValidity();
      this.checkoutForm.get('parcelLockerPoint').setValidators(null);
      this.checkoutForm.get('parcelLockerPoint').updateValueAndValidity();
    }
  }
}
