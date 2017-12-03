import { Component, OnInit } from '@angular/core';

import { CartService } from '../../shared/services/cart.service';
import { IProduct } from '../../shared/models/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  Products: IProduct[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.Products = this.cartService.retriveWishlist();
  }

  addToCart(product: IProduct, index: number) {
    this.cartService.addToCart(product);
    this.removeItem(index);
  }

  addAllToCart() {
    this.cartService.addRangeToCart(this.Products);
    this.cartService.clearWishlist();
    this.Products = [];
  }

  productPrice(product: IProduct): number {
    if (product.IsDiscounted) {
      return product.Price - product.Price * product.DiscountPercent / 100;
    }
    return product.Price;
  }

  removeItem(index: number) {
    this.Products.splice(index, 1);
    this.cartService.removeFromWishlist(index);
  }
}
