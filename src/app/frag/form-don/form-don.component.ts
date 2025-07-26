
import { Initiative } from './../../_models/initiative';
import { Component, Inject, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MeboService } from '../../_service/mebo.service';
import { Don } from '../../_models/don';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-form-don',
  imports: [ReactiveFormsModule],
  templateUrl: './form-don.component.html',
  styleUrl: './form-don.component.css'
})
export class FormDonComponent {
  [x: string]: any;

  private formBuilder = inject(FormBuilder);

  private meboService = inject(MeboService);

  @Inject(DOCUMENT) private document: Document = inject(DOCUMENT)

  donForm = this.formBuilder.group({
    nom: ['', Validators.required],
    natureDon: ['', Validators.required],
    description: [''],
    organisation: [''],
    ville: ['', Validators.required],
    dateDon: ['', Validators.required],
    statut: [false],
    quantite: [],
    montant: [],
    contactResponsable: ['', Validators.required],
    mediaurls: this.formBuilder.array([this.formBuilder.control('')]),
  }

  );

  natureDon = [
    {
      title: "Ciments",
      value: "Ciments"
    },
    {
      title: "Main d'oeuvre",
      value: "Main d'oeuvre"
    },
    {
      title: "Gravier",
      value: "Gravier"
    },
    {
      title: "Chargement de sable",
      value: "Chargement de sable"
    },
    {
      title: "Matériaux de construction et de l’électroménager",
      value: "Matériaux de construction et de l’électroménager"
    },

  ];

  ville = [
    {
      title: 'Ouaga',
      value: 'Ouagadougou'
    },
    {
      title: 'Bobo',
      value: 'Bobo-Dioulasso'
    },
    {
      title: 'Kaya',
      value: 'Kaya'
    },
    {
      title: 'Dori',
      value: 'Dori'
    },

  ]

  constructor() { }

  ngOnInit() {
     this.document.documentElement.scrollTop = 0;
  }

  get aliases() {
    return this.donForm.get('mediaurls') as unknown as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  getFormData(): Don {
    const formValue = this.donForm.value;

    return {
      nom: formValue.nom || '', // Fallback pour les champs requis
      natureDon: formValue.natureDon || '',
      description: formValue.description || '',
      organisation: formValue.organisation || '',
      ville: formValue.ville || '',
      dateDon: formValue.dateDon || '',
      statut: formValue.statut ?? false,
      quantite: formValue.quantite || 0,
      montant: formValue.montant || 0,
      contactResponsable: formValue.contactResponsable || '',
      mediaurls: formValue.mediaurls
    };
  }

  onSubmit() {
    console.log(this.donForm.value);

    if (this.donForm.valid) {
      const donData: Don = this.getFormData();

      console.log(donData);

      this.meboService.createInitiative(donData).subscribe({
        next:()=>{
          window.location.reload();
        },
        error:()=>{

        }
      })

    }
  }
}
