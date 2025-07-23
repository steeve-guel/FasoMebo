import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-don',
  imports: [],
  templateUrl: './modal-don.component.html',
  styleUrl: './modal-don.component.css'
})
export class ModalDonComponent {

  ngOnInit() {
    document.addEventListener('keydown', (event) => {
      if (event.key === "Escape") {
        this.closeModal();
      }
    });
  }

  openModal($el: any) {
    // $el.target.classList.add('is-active');

    // console.log($el.target.classList);

    // let e = document.querySelectorAll('.js-modal-trigger') || [];

    // console.log(e);

    // e.forEach(
    //   (val)=>{
    //     console.log(val.getAttribute('data-target'));

    //   }
    // )

    let e = document.querySelectorAll('.modal') || [];

    e.forEach((val) => {
      val.classList.add('is-active');
    });

    console.log(e);

  }

  closeModal() {
    let e = document.querySelectorAll('.modal') || [];

    e.forEach((val) => {
      val.classList.remove('is-active');
    });
  }
}
