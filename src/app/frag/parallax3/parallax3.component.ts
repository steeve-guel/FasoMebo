import { Component, inject, signal } from '@angular/core';
import { Caroussel1Component } from '../../public/caroussel1/caroussel1.component';
import { MeboService } from '../../_service/mebo.service';
import { Don } from '../../_models/don';
import { single } from 'rxjs';

@Component({
  selector: 'app-parallax3',
  imports: [Caroussel1Component],
  templateUrl: './parallax3.component.html',
  styleUrl: './parallax3.component.css'
})
export class Parallax3Component {


  listeDon!: Don[];

  colorBoo:boolean = true

  private meboService = inject(MeboService);
  sections = signal([
    { title: 'Accueil', content: 'body hitting the ground rudely awakened us. We looked around to find my mother missing from her bed. In a swift motion my wife jumped from the bed and dashed out of the room to find her lay flat, face down on the floor motion less. Her fore head was badly injured. She was bleeding profusely from her lips due to the impact of the fall. But there was virtually no reaction from her. We physically lifted her and put her on the bed. My wife gently cleansed the wound and enquired whether it was hurting. She replied in affirmative. But there was no sign of pain in the face. No tears in her eyes. Just plain disoriented look, devoid of any feelings and emotions. The disease took away all her emotional feelings and also dried up the tear glands. Looking at her state I cried silently', color: '#fff', textDark: true },
    { title: 'Services', content: 'Nos offres', color: '#85c20a' },
    { title: 'Portfolio', content: 'Nos réalisations', color: '#fff' },
    { title: 'Contact', content: 'Prenez contact', color: '#85c20a' }
  ]);

  getTopPosition(index: number): string {
    return `calc(${index} * (100vh - 60px))`;
  }
}
