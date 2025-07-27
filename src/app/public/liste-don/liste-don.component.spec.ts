import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDonComponent } from './liste-don.component';

describe('ListeDonComponent', () => {
  let component: ListeDonComponent;
  let fixture: ComponentFixture<ListeDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
