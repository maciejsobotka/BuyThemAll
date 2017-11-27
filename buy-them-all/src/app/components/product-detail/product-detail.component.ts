import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { DataService } from '../../shared/services/data.service';
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

  constructor(private route: ActivatedRoute, private dataService: DataService, private titleService: Title) { }

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
}
