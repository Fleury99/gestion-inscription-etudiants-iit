import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscriptionComponent } from './gestion-inscription.component';

describe('GestionInscriptionComponent', () => {
  let component: GestionInscriptionComponent;
  let fixture: ComponentFixture<GestionInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionInscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
