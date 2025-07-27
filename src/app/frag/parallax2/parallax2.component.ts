import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-parallax2',
  imports: [],
  templateUrl: './parallax2.component.html',
  styleUrl: './parallax2.component.css'
})
export class Parallax2Component {

  // currentSection = 0;

  // sections = [
  //   {
  //     id: 1,
  //     title: 'Première Section',
  //     content: 'Contenu de la section glissante 1',
  //     background: '/images/image1.jpg'
  //   },
  //   {
  //     id: 2,
  //     title: 'Deuxième Section',
  //     content: 'Contenu de la section glissante 2',
  //     background: '/images/image2.jpg'
  //   },
  //   {
  //     id: 3,
  //     title: 'Dernière Section',
  //     content: 'Contenu de la section finale',
  //     background: '/images/image3.jpg'
  //   }
  // ];

  // goToNext() {
  //   if (this.currentSection < this.sections.length - 1) {
  //     this.currentSection++;
  //   }
  // }

  // @HostListener('window:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (event.key === 'ArrowDown') {
  //     this.goToNext();
  //   } else if (event.key === 'ArrowUp') {
  //     if (this.currentSection > 0) {
  //       this.currentSection--;
  //     }
  //   }
  // }

  // @HostListener('wheel', ['$event'])
  // onScroll(event: WheelEvent) {
  //   event.preventDefault();
  //   if (event.deltaY > 0) {
  //     this.goToNext();
  //   } else if (event.deltaY < 0 && this.currentSection > 0) {
  //     this.currentSection--;
  //   }
  // }
  activeIndex = signal(0);
  scrollY = signal(0);
  sections = signal([
    {
      id: 1,
      title: 'Première Section',
      content: 'Le contenu apparaît en superposition',
      background: 'assets/images/parallax1.jpg'
    },
    {
      id: 2,
      title: 'Deuxième Section',
      content: 'Nouveau contenu qui recouvre le précédent',
      background: 'assets/images/parallax2.jpg'
    },
    {
      id: 3,
      title: 'Dernière Section',
      content: 'Effet de superposition fluide',
      background: 'assets/images/parallax3.jpg'
    }
  ]);

  getTransform(index: number): string {
    if (index <= this.activeIndex()) {
      return 'translateY(0)';
    } else {
      const offset = (index - this.activeIndex()) * 20;
      return `translateY(${offset}px)`;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionCount = this.sections().length;

    // Calcul de l'index actif basé sur le scroll
    const newIndex = Math.min(
      sectionCount - 1,
      Math.floor(scrollPosition / windowHeight * 1.5)
    );

    if (newIndex !== this.activeIndex()) {
      this.activeIndex.set(newIndex);
    }
  }

  @HostListener('window:resize')
  onResize() {
    // Réinitialiser au redimensionnement
    window.scrollTo(0, this.activeIndex() * window.innerHeight);
  }
}
