import { Component, OnInit } from '@angular/core';

import { CartService } from '../../shared/services/cart.service';
import { IProduct } from '../../shared/models/product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  Products: IProduct[];

  get IsScreenXs(): boolean {
    return window.innerWidth <= 600;
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.Products = this.cartService.retriveCart();
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
  }
}
