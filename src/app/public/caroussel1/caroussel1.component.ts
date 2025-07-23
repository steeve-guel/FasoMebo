import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caroussel1',
  imports: [CommonModule],
  templateUrl: './caroussel1.component.html',
  animations:[
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1000ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ],
  styleUrl: './caroussel1.component.css'
})
export class Caroussel1Component {

   slides = [
    { 
      image: 'images/image1.jpg',
      title: 'Projet BOBO Dioulasso.',
      description: 'Dépôt des  première pavés de Faso mêbo',
      loaded: false
    },
    { 
      image: 'images/image2.jpg',
      title: 'Don de l\'artiste Floby',
      description: 'Offre de 100 tonnes de ciment',
      loaded: false
    },
    { 
      image: 'images/image3.jpg',
      title: 'Don de l\'enfant',
      description: 'Offre de 10 tonnes de ciment',
      loaded: false
    }
  ];

  currentSlide = 0;
  interval: any;
  isInitialized = false;

  ngOnInit() {
    this.preloadImages().then(() => {
      this.isInitialized = true;
      this.startAutoPlay();
    });
  }

  preloadImages(): Promise<void[]> {
    const promises = this.slides.map((slide, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = () => {
          this.slides[index].loaded = true;
          resolve();
        };
        img.onerror = () => resolve();
      });
    });
    return Promise.all(promises);
  }

  startAutoPlay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoPlay();
  }

  resetAutoPlay() {
    clearInterval(this.interval);
    this.startAutoPlay();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
