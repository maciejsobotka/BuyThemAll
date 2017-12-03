import { Injectable } from '@angular/core';

import { DataHelper } from '../utils/data-helper';
import { IProduct } from '../models/product';

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

  addRangeToCart(product: IProduct[]) {
    let products = JSON.parse(localStorage.getItem('cart'));
    if (!DataHelper.hasValue(products)) {
      products = [];
    }
    products = products.concat(product);
    localStorage.setItem('cart', JSON.stringify(products));
  }

  addToCart(product: IProduct) {
    let products = JSON.parse(localStorage.getItem('cart'));
    if (!DataHelper.hasValue(products)) {
      products = [];
    }
    products.push(product);
    localStorage.setItem('cart', JSON.stringify(products));
  }

  addToWishlist(product: IProduct) {
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
    const products: IProduct[] = JSON.parse(localStorage.getItem('wishlist'));
    if (DataHelper.hasValue(products)) {
      products.splice(index, 1);
      localStorage.setItem('wishlist', JSON.stringify(products));
    }
  }

  retriveCart(): IProduct[] {
    return JSON.parse(localStorage.getItem('cart'));
  }

  retriveWishlist(): IProduct[] {
    return JSON.parse(localStorage.getItem('wishlist'));
  }
}
