import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

import { IProduct } from '../../shared/models/product';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements AfterViewInit {

  @Input()
  Product: IProduct;

  @ViewChild('carousel')
  Carousel: any;

  ngAfterViewInit(): void {
    this.Carousel.nativeElement.style.touchAction = 'pan-y';
  }
}
