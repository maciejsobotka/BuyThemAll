import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';

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
    path: 'cart',
    component: CartComponent,
    data: {
      title: 'Koszyk',
      hidden: true
    }
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    data: {
      title: 'Wishlist',
      hidden: true
    }
  },
  {
    path: 'promotions',
    component: ProductsComponent,
    data: {
      title: 'Promocje',
      color: 'red',
      api: '/api/Products/GetDiscountedProducts'
    }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: {
      title: 'Wszystkie produkty',
      api: '/api/Products/GetProducts'
    }
  },
  {
    path: 't-shirts',
    component: ProductsComponent,
    data: {
      title: 'Koszulki',
      api: '/api/Products/GetTShirts'
    }
  },
  {
    path: 'mugs',
    component: ProductsComponent,
    data: {
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
