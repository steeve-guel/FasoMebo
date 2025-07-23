import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalDonComponent } from '../../frag/modal-don/modal-don.component';

@Component({
  selector: 'app-nav',
  imports: [RouterLink,RouterLinkActive,ModalDonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
