import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LocationComponent } from './pages/location/location.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produits', component: ProductsComponent },
  { path: 'produit/:id', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'localisation', component: LocationComponent },
  { path: '**', redirectTo: '' }
];