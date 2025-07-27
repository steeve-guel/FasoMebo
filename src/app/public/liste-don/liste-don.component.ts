import { Component, inject, signal } from '@angular/core';
import { Don } from '../../_models/don';
import { MeboService } from '../../_service/mebo.service';

@Component({
  selector: 'app-liste-don',
  imports: [],
  templateUrl: './liste-don.component.html',
  styleUrl: './liste-don.component.css'
})
export class ListeDonComponent {

  listeDon!: Don[];
  sections!: Section[];

  sectionsignal = signal<Section[]>([]);

  private meboService = inject(MeboService);

  ngOnInit() {
    this.meboService.listeInitiative().subscribe({
      next: (data: Don[]) => {
        this.listeDon = data;
        console.log(this.listeDon);

        const newSections = data.map((item, index) => ({
          content: item,
          color: index % 2 === 0 ? '#85c20a' : '#fff',
          textDark: index % 2 !== 0 // Optionnel: texte sombre sur fond clair
        }));

        this.sectionsignal.set(newSections);

        console.log(this.sectionsignal);

        // data.forEach((item, index) => {


        //   if (index % 2 === 0) {
        //     let color = '#85c20a'; // Alternance de couleurs

        //     let sectionDon: Section = {
        //       content: item,
        //       color: color
        //     };

        //     this.sections.push(sectionDon);
        //   } else {
        //     let color = '#fff';

        //     let sectionDon: Section = {
        //       content: item,
        //       color: color
        //     };

        //     this.sections.push(sectionDon);
        //   }

        //   this.sectionsignal.set(this.sections);

        //   console.table(this.sectionsignal);
        // });
      },
      error: () => {

      }
    });
  }
}

interface Section {
  content: Don;
  color: string;
  textDark?: boolean;
}
