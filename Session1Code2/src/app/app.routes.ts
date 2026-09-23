import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetails } from './pages/product-details/product-details';
import { SearchResult } from './pages/search-result/SearchResult';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'productdetails/:id', component: ProductDetails },
  { path: 'search', component: SearchResult },
  // Anything unmatched falls back to the home page rather than a dead end.
  { path: '**', redirectTo: '' },
];
