import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parallax3Component } from './parallax3.component';

describe('Parallax3Component', () => {
  let component: Parallax3Component;
  let fixture: ComponentFixture<Parallax3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parallax3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parallax3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
