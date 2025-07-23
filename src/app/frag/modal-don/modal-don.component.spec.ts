import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDonComponent } from './modal-don.component';

describe('ModalDonComponent', () => {
  let component: ModalDonComponent;
  let fixture: ComponentFixture<ModalDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
