import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHistorialesComponent } from './ver-historiales.component';

describe('VerHistorialesComponent', () => {
  let component: VerHistorialesComponent;
  let fixture: ComponentFixture<VerHistorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerHistorialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerHistorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
