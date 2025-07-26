import { Routes } from '@angular/router';
import { AccueilComponent } from './public/accueil/accueil.component';
import { HistoriqueComponent } from './public/historique/historique.component';
import { InitiativeComponent } from './public/initiative/initiative.component';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'histoire', component: HistoriqueComponent },
  { path: 'initiative', component: InitiativeComponent }
];
