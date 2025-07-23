import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionBenefiiciaireComponent } from './reaction-benefiiciaire.component';

describe('ReactionBenefiiciaireComponent', () => {
  let component: ReactionBenefiiciaireComponent;
  let fixture: ComponentFixture<ReactionBenefiiciaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactionBenefiiciaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactionBenefiiciaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
