import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parallax',
  imports: [],
  templateUrl: './parallax.component.html',
  styleUrl: './parallax.component.css'
})
export class ParallaxComponent {

}

interface ParallaxSection {
  title: string;
  content: string;
  backgroundImage: string;
  isParallax: boolean;
}
