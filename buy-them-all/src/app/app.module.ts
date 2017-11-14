import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppCommonModule } from './shared/app-common.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './shared/services/auth.service';
import { DataService } from './shared/services/data.service';
import { ToolbarService } from './shared/services/toolbar.service';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppCommonModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    DataService,
    ToolbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
