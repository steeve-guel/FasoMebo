import { ReactionBenefiiciaireComponent } from './../../frag/reaction-benefiiciaire/reaction-benefiiciaire.component';
import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { Caroussel1Component } from '../caroussel1/caroussel1.component';

@Component({
  selector: 'app-accueil',
  imports: [NavComponent,Caroussel1Component,ReactionBenefiiciaireComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {


}
