import { Component, OnInit } from '@angular/core';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProducts('http://localhost:50126/api/Products')
    .subscribe(prods => {
        this.Products = prods;
        console.log(prods);
    });
  }

  addToWishlist(product: IProduct) {
    console.log('AddToWishlist');
  }

  goToDetail(product: IProduct) {
    console.log('GoToProduct');
  }
}
