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
      title: 'A Shop',
      hidden: true
    }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: {
      icon: 'person',
      title: 'Wszystkie produkty',
      api: '/api/Products/GetProducts'
    }
  },
  {
    path: 't-shirts',
    component: ProductsComponent,
    data: {
      icon: 'person',
      title: 'Koszulki',
      api: '/api/Products/GetTShirts'
    }
  },
  {
    path: 'mugs',
    component: ProductsComponent,
    data: {
      icon: 'person',
      title: 'Kubki',
      api: '/api/Products/GetMugs'
    }
  },
  {
    path: 'posters',
    component: ProductsComponent,
    data: {
      icon: 'person',
      title: 'Plakaty',
      api: '/api/Products/GetPosters'
    }
  },
  {
    path: 'product/:id',
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
