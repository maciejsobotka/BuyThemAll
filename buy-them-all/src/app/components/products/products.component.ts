import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { DataService } from '../../shared/services/data.service';
import { ScrollService} from '../../shared/services/scroll.service';
import { IAvalibility } from '../../shared/models/avalibility';
import { IProduct } from '../../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  AllProducts: IProduct[];
  Avalibilities: IAvalibility[];
  FiltersActive = false;
  MaxPrice: number;
  MinPrice: number;
  Products: IProduct[];
  SortActive = false;

  filterForm = new FormGroup({
    avalibility: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl('')
  });

  sortForm = new FormGroup({
    sort: new FormControl('')
  });

  @ViewChild('filterPanel')
  FilterPanel: any;

  @ViewChild('sortPanel')
  SortPanel: any;

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
        const sortedProducts = this.Products.concat().sort((a, b) => this.productPrice(a) - this.productPrice(b));
        this.MinPrice = parseInt((this.productPrice(sortedProducts[0]) - 1).toString(), 10);
        this.MaxPrice = parseInt((this.productPrice(sortedProducts[sortedProducts.length - 1]) + 1).toString(), 10);
        setTimeout(() => document.querySelector('.mat-sidenav-content').scrollTop = this.scrollService.retriveScroll(api));
    });
    this.dataService.getAvalibilities().subscribe(aval => this.Avalibilities = aval);
  }

  discountedPrice(product: IProduct): number {
    return product.Price - product.Price * product.DiscountPercent / 100;
  }

  goTop() {
    this.scrollService.scrollTop();
  }

  filterProducts() {
    this.Products = this.AllProducts;
    if (this.filterForm.get('price').value > this.MinPrice) {
      this.Products = this.Products.filter(p => this.productPrice(p) <= this.filterForm.get('price').value);
      this.FiltersActive = true;
    }
    if (this.filterForm.get('name').value) {
      this.Products = this.Products.filter(p => p.Name.toLowerCase().indexOf(this.filterForm.get('name').value.toLowerCase()) !== -1);
      this.FiltersActive = true;
    }
    if (this.filterForm.get('avalibility').value) {
      this.Products = this.Products.filter(p => p.Avalibility.Description === this.filterForm.get('avalibility').value);
      this.FiltersActive = true;
    }
    if (this.SortActive) {
      this.sortProducts();
    }
    this.FilterPanel.close();
  }

  productPrice(product: IProduct): number {
    if (product.IsDiscounted) {
      return this.discountedPrice(product);
    }
    return product.Price;
  }

  sortProducts() {
    if (this.sortForm.get('sort').value === 1) {
      this.Products = this.Products.concat().sort((a, b) => this.productPrice(a) - this.productPrice(b));
      this.SortActive = true;
    }
    if (this.sortForm.get('sort').value === 2) {
      this.Products = this.Products.concat().sort((a, b) => this.productPrice(b) - this.productPrice(a));
      this.SortActive = true;
    }
    this.SortPanel.close();
  }

  removeFilters() {
    this.Products = this.AllProducts;
    if (this.SortActive) {
      this.sortProducts();
    }
    this.filterForm.get('name').reset();
    this.filterForm.get('price').setValue(this.MinPrice);
    this.filterForm.get('avalibility').reset();
    this.FiltersActive = false;
    this.FilterPanel.close();
  }

  removeSort() {
    this.sortForm.get('sort').setValue(0);
    this.SortActive = false;
    if (this.FiltersActive) {
      this.filterProducts();
    }
    this.SortPanel.close();
  }
}
