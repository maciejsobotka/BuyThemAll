import { Component, Input } from '@angular/core';

import { IProduct } from '../../shared/models/product';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent {

  @Input()
  Product: IProduct;
}
