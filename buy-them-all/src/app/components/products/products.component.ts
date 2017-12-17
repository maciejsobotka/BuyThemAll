import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../shared/services/data.service';
import { ScrollService} from '../../shared/services/scroll.service';
import { IProduct } from '../../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  AllProducts: IProduct[];
  FiltersActive = false;
  Products: IProduct[];
  SliderValue: number;

  constructor(private route: ActivatedRoute, private dataService: DataService, private scrollService: ScrollService) { }

  ngOnDestroy(): void {
    this.scrollService.saveScroll(this.route.routeConfig.data.api);
  }

  ngOnInit() {
    const api: string = this.route.routeConfig.data.api;
    this.dataService.getProducts(api)
    .subscribe(prods => {
        this.AllProducts = prods;
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

  filterProducts() {
    if (this.SliderValue) {
      this.Products = this.AllProducts.filter(p => this.productPrice(p) <= this.SliderValue);
      this.FiltersActive = true;
    }
  }

  productPrice(product: IProduct): number {
    if (product.IsDiscounted) {
      return this.discountedPrice(product);
    }
    return product.Price;
  }

  removeFilters() {
    this.Products = this.AllProducts;
    this.FiltersActive = false;
  }

  sliderValue(slider: any) {
    this.SliderValue = slider.value;
  }
}
