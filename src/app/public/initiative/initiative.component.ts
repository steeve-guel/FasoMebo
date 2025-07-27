import { Component } from '@angular/core';
import { ListeDonComponent } from '../liste-don/liste-don.component';
import { Parallax3Component } from '../../frag/parallax3/parallax3.component';
import { ParallaxComponent } from "../../frag/parallax/parallax.component";

@Component({
  selector: 'app-initiative',
  imports: [ListeDonComponent, Parallax3Component, ParallaxComponent],
  templateUrl: './initiative.component.html',
  styleUrl: './initiative.component.css'
})
export class InitiativeComponent {

}
