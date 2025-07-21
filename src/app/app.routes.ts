import { Routes } from '@angular/router';
import { AccueilComponent } from './public/accueil/accueil.component';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent }
];
