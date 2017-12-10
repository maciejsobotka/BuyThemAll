import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppCommonModule } from './shared/app-common.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './shared/services/auth.service';
import { DataService } from './shared/services/data.service';
import { ToolbarService } from './shared/services/toolbar.service';
import { CartService } from './shared/services/cart.service';
import { ScrollService } from './shared/services/scroll.service';

import { ClickStopPropagationDirective } from './shared/directives/click-stop-propagation.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [
    ClickStopPropagationDirective,
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductCarouselComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppCommonModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    DataService,
    ToolbarService,
    CartService,
    ScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
