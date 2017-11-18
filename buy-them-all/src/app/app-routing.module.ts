import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      icon: 'home',
      hidden: true
    }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: {
      icon: 'person',
      title: 'Koszulki'
    }
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    data: {
      hidden: true
    }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
