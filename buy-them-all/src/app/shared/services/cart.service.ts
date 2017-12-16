import { Injectable } from '@angular/core';

import { DataHelper } from '../utils/data-helper';
import { IOrderProduct } from '../models/order-product';

@Injectable()
export class CartService {
  get CartSize(): number {
    const products = JSON.parse(localStorage.getItem('cart'));
    if (DataHelper.hasValue(products)) {
      return +products.length;
    }
    return 0;
  }

  get WishlistSize(): number {
    const products = JSON.parse(localStorage.getItem('wishlist'));
    if (DataHelper.hasValue(products)) {
      return +products.length;
    }
    return 0;
  }

  constructor() { }

  addRangeToCart(product: IOrderProduct[]) {
    let products = JSON.parse(localStorage.getItem('cart'));
    if (!DataHelper.hasValue(products)) {
      products = [];
    }
    products = products.concat(product);
    localStorage.setItem('cart', JSON.stringify(products));
  }

  addToCart(product: IOrderProduct) {
    let products = JSON.parse(localStorage.getItem('cart'));
    if (!DataHelper.hasValue(products)) {
      products = [];
    }
    products.push(product);
    localStorage.setItem('cart', JSON.stringify(products));
  }

  addToWishlist(product: IOrderProduct) {
    let products = JSON.parse(localStorage.getItem('wishlist'));
    if (!DataHelper.hasValue(products)) {
      products = [];
    }
    products.push(product);
    localStorage.setItem('wishlist', JSON.stringify(products));
  }

  clearCart() {
    localStorage.removeItem('cart');
  }

  clearWishlist() {
    localStorage.removeItem('wishlist');
  }

  removeFromCart(index: number) {
    const products = JSON.parse(localStorage.getItem('cart'));
    if (DataHelper.hasValue(products)) {
      products.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(products));
    }
  }

  removeFromWishlist(index: number) {
    const products: IOrderProduct[] = JSON.parse(localStorage.getItem('wishlist'));
    if (DataHelper.hasValue(products)) {
      products.splice(index, 1);
      localStorage.setItem('wishlist', JSON.stringify(products));
    }
  }

  retriveCart(): IOrderProduct[] {
    return JSON.parse(localStorage.getItem('cart'));
  }

  retriveWishlist(): IOrderProduct[] {
    return JSON.parse(localStorage.getItem('wishlist'));
  }
}
