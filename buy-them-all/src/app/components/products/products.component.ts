import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../shared/services/data.service';
import { ScrollService} from '../../shared/services/scroll.service';
import { IProduct } from '../../shared/models/product';
import { doesNotThrow } from 'assert';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  Products: IProduct[];

  constructor(private route: ActivatedRoute, private dataService: DataService, private scrollService: ScrollService) { }

  ngOnDestroy(): void {
    this.scrollService.saveScroll(this.route.routeConfig.data.api);
  }

  ngOnInit() {
    const api: string = this.route.routeConfig.data.api;
    this.dataService.getProducts(api)
    .subscribe(prods => {
        this.Products = prods;
        setTimeout(() => document.querySelector('.mat-sidenav-content').scrollTop = this.scrollService.retriveScroll(api));
    });
  }

  discountedPrice(product: IProduct): number {
    return product.Price - product.Price * product.DiscountPercent / 100;
  }

  goTop() {
    this.scrollService.scrollTop();
  }
}
