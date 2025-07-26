import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDonComponent } from './form-don.component';

describe('FormDonComponent', () => {
  let component: FormDonComponent;
  let fixture: ComponentFixture<FormDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
