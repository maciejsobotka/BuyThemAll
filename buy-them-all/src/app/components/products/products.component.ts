import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../shared/services/data.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { IProduct } from '../../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Products: IProduct[];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const api: string = this.route.routeConfig.data.api;
    this.dataService.getProducts(api)
    .subscribe(prods => {
        this.Products = prods;
    });
  }

  addToWishlist(product: IProduct) {
    console.log('AddToWishlist');
  }

  discountedPrice(product: IProduct): number {
    return product.Price - product.Price * product.DiscountPercent / 100;
  }

  goToDetail(product: IProduct) {
    console.log('GoToProduct');
  }
}
