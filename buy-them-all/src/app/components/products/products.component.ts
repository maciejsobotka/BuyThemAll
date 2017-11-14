import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

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

  constructor(private dataService: DataService, private dialog: MatDialog, ) { }

  ngOnInit() {
    this.dataService.getProducts('http://localhost:50126/api/Products')
    .subscribe(prods => {
        this.Products = prods;
    });
  }

  openDialog(data: IProduct): void {
    const dialogRef = this.dialog.open(ProductDetailComponent, {
        width: '80vw',
        data: data
});

    dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
    });
}

}
