import { Component, inject } from '@angular/core';
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

  private meboService = inject(MeboService);

  ngOnInit() {
    this.meboService.listeInitiative().subscribe({
      next: (data: Don[]) => {
        this.listeDon = data;
        console.log(this.listeDon);
      },
      error: () => {

      }
    });
  }
}
