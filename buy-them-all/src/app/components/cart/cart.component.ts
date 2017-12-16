import { Component, OnInit } from '@angular/core';

import { CartService } from '../../shared/services/cart.service';
import { IProduct } from '../../shared/models/product';
import { IAvalibility } from '../../shared/models/avalibility';
import { DataHelper } from '../../shared/utils/data-helper';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  Avalibility: IAvalibility;
  Products: IProduct[];

  get IsScreenXs(): boolean {
    return window.innerWidth <= 600;
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.Products = this.cartService.retriveCart();
    this.setOrderAvalibility();
  }

  orderPrice(): number {
    return this.Products.reduce((a, b) => a + this.productPrice(b), 0);
  }

  productPrice(product: IProduct): number {
    if (product.IsDiscounted) {
      return product.Price - product.Price * product.DiscountPercent / 100;
    }
    return product.Price;
  }

  removeItem(index: number) {
    this.Products.splice(index, 1);
    this.cartService.removeFromCart(index);
    this.setOrderAvalibility();
  }

  setOrderAvalibility() {
    if (DataHelper.hasValue(this.Products)) {
      if (this.Products.some(p => p.Avalibility.Name.indexOf('72') !== -1)) {
        this.Avalibility = this.Products.find(p => p.Avalibility.Name.indexOf('72') !== -1).Avalibility;
      } else if (this.Products.some(p => p.Avalibility.Name.indexOf('48') !== -1)) {
        this.Avalibility = this.Products.find(p => p.Avalibility.Name.indexOf('48') !== -1).Avalibility;
      } else if (this.Products.some(p => p.Avalibility.Name.indexOf('24') !== -1)) {
        this.Avalibility = this.Products.find(p => p.Avalibility.Name.indexOf('24') !== -1).Avalibility;
      }
    }
  }
}
