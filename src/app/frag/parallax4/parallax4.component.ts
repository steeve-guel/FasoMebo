import { Component, HostListener, signal } from '@angular/core';

interface DataItem {
  id: number;
  title: string;
  value: string;
  description?: string;
}
@Component({
  selector: 'app-parallax4',
  imports: [],
  templateUrl: './parallax4.component.html',
  styleUrl: './parallax4.component.css'
})
export class Parallax4Component {
  currentIndex = signal(0);

  // Exemple de données - remplacez par vos données
  data = signal<DataItem[]>([
    {
      id: 1,
      title: 'Utilisateurs actifs',
      value: '12,845',
      description: 'Augmentation de 15% ce mois-ci'
    },
    {
      id: 2,
      title: 'Satisfaction client',
      value: '94%',
      description: 'Score NPS exceptionnel'
    },
    {
      id: 3,
      title: 'Commandes traitées',
      value: '1,248',
      description: 'Délai moyen de 2.4 jours'
    },
    {
      id: 4,
      title: 'Revenu mensuel',
      value: '$48,229',
      description: 'Dépassement des objectifs'
    }
  ]);

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    this.currentIndex.set(Math.floor(scrollPosition / windowHeight));
  }

}
