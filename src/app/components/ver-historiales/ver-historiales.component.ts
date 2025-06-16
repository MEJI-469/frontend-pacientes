import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { HistorialMedico } from '../../models/paciente';

@Component({
  selector: 'app-ver-historiales',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ver-historiales.component.html',
  styleUrls: ['./ver-historiales.component.css'],
})
export class VerHistorialesComponent implements OnInit {
  id: string = '';
  historiales: HistorialMedico[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.pacienteService
      .getHistoriales(this.id)
      .subscribe((data) => (this.historiales = data));
  }

  irAgregarHistorial() {
    this.router.navigate(['/historiales', this.id, 'agregar']);
  }

  volver(): void {
    this.router.navigate(['/lista']); // ajusta según el path real de tu lista de pacientes
  }
}
