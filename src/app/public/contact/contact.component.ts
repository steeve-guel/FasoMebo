import { Component } from '@angular/core';
import { ParallaxComponent } from '../../frag/parallax/parallax.component';
import { Parallax2Component } from '../../frag/parallax2/parallax2.component';
import { Parallax3Component } from '../../frag/parallax3/parallax3.component';
import { Caroussel1Component } from '../caroussel1/caroussel1.component';
import { Parallax4Component } from '../../frag/parallax4/parallax4.component';

@Component({
  selector: 'app-contact',
  imports: [Parallax4Component],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
