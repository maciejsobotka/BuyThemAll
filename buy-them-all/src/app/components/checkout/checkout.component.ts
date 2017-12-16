import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../../shared/services/data.service';
import { IVoivodeship } from '../../shared/models/voivodeship';
import { ObservableMedia } from '@angular/flex-layout';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^[0-9]{9}$/;
const ZIP_CODE_REGEX = /^[0-9]{2}-[0-9]{3}$/;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  ParcelLockers = new Array<any>();
  Voivodeships: IVoivodeship[];

  parcelChange$: Observable<any>;
  shipmentChange$: Observable<any>;

  checkoutForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]),
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

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getVoivodeships()
    .subscribe(voiv => {
      this.Voivodeships = voiv;
    });

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
    this.shipmentChange$.subscribe(val => {
      if (val === 3) {
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
    });
  }

  validateParcelLockerCity(): ValidatorFn {
    return (c: AbstractControl) => {
      if (this.ParcelLockers.length > 0) {
          return null;
      } else {
          return {
            noParcelLockers: {
              valid: false
            }
          };
      }
    }
  }

  a() {
    console.log(this.checkoutForm);
  }
}
