import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './public/nav/nav.component';
import { FooterComponent } from './public/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FasoMebo';
}
