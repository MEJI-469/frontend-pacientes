import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariaDashboardComponent } from './secretaria-dashboard.component';

describe('SecretariaDashboardComponent', () => {
  let component: SecretariaDashboardComponent;
  let fixture: ComponentFixture<SecretariaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretariaDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretariaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
