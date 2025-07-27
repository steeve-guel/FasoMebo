import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parallax4Component } from './parallax4.component';

describe('Parallax4Component', () => {
  let component: Parallax4Component;
  let fixture: ComponentFixture<Parallax4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parallax4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parallax4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
