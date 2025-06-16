import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesAltaDoctorComponent } from './pacientes-alta-doctor.component';

describe('PacientesAltaDoctorComponent', () => {
  let component: PacientesAltaDoctorComponent;
  let fixture: ComponentFixture<PacientesAltaDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesAltaDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesAltaDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
