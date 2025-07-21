import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caroussel1Component } from './caroussel1.component';

describe('Caroussel1Component', () => {
  let component: Caroussel1Component;
  let fixture: ComponentFixture<Caroussel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caroussel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caroussel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
