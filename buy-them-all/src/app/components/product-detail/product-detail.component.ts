import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../shared/services/data.service';
import { CartService } from '../../shared/services/cart.service';
import { IProduct } from '../../shared/models/product';
import { DataHelper } from '../../shared/utils/data-helper';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  Product: IProduct;

  form = new FormGroup({
    productSize: new FormControl('', Validators.required),
    productColor: new FormControl('', Validators.required)
  });

  get productSize() { return this.form.get('productSize'); }

  get productColor() { return this.form.get('productColor'); }

  constructor(private route: ActivatedRoute,
    private titleService: Title,
    private dataService: DataService,
    private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.dataService.getProduct(params.get('id')))
    .subscribe(prod => {
      this.titleService.setTitle(prod.Name);
      this.Product = prod;
    });
  }

  discountedPrice(product: IProduct): number {
    if (DataHelper.hasValue(product)) {
      return product.Price - product.Price * product.DiscountPercent / 100;
    }
  }

  validateForm(): boolean {
    if (this.form.valid) {
      return true;
    } else {
      const keys = Object.keys(this.form.controls);
      keys.forEach( k => this.form.controls[k].markAsDirty());
      return false;
    }
  }

  addToCart() {
    if (this.validateForm()) {
      this.Product.Color = this.productColor.value;
      this.Product.Size = this.productSize.value;
      this.cartService.addToCart(this.Product);
    }
  }

  addToWhishlist() {
    if (this.validateForm()) {
      this.Product.Color = this.productColor.value;
      this.Product.Size = this.productSize.value;
      this.cartService.addToWishlist(this.Product);
    }
  }
}
