import { Component, OnInit } from '@angular/core';
import { Cita, CitaService } from '../../services/cita.service';
import { PacienteService } from '../../services/paciente.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Paciente } from '../../models/paciente';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-citas',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './doctor-citas.component.html',
  styleUrl: './doctor-citas.component.css',
})
export class DoctorCitasComponent implements OnInit {
  pacientes: Paciente[] = [];
  citas: Cita[] = [];
  doctorActual: string = '';
  pacientesFiltrados: Paciente[] = [];
  busqueda: string = '';

  constructor(
    private citaService: CitaService,
    private pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.doctorActual = usuario.nombre || '';

    this.citaService.obtenerCitas().subscribe({
      next: (data) => {
        this.citas = data.filter((c) => c.doctor === this.doctorActual);
      },
      error: () => alert('Error al cargar citas del doctor'),
    });

    this.pacienteService.getPacientes().subscribe({
      next: (data) => (this.pacientes = data),
      error: () => alert('Error al cargar pacientes'),
    });
  }

  obtenerIdPorCedula(cedula: string): string | undefined {
  return this.pacientes.find(p => p.cedula === cedula)?.id;
}

  filtrarPacientes() {
    const filtro = this.busqueda.toLowerCase();
    this.pacientesFiltrados = this.pacientes.filter(
      (p) =>
        p.nombre.toLowerCase().includes(filtro) || p.cedula.includes(filtro)
    );
  }

  verHistorial(id: string | undefined): void {
    if (!id) return;
    this.router.navigate(['/historiales', id]);
  }

  darAlta(cedula: string): void {
    this.pacienteService.getPacientePorCedula(cedula).subscribe((paciente) => {
      if (paciente.alta) {
        alert('Este paciente ya está dado de alta.');
      } else {
        this.pacienteService.darAlta(paciente.id!).subscribe(() => {
          alert('✅ Paciente dado de alta.');
        });
      }
    });
  }

  /*darAltaa(id: string): void {
    this.pacienteService.darAlta(id).subscribe({
      next: () => {
        this.pacientes = this.pacientes.map((p) =>
          p.id === id ? { ...p, alta: true } : p
        );
      },
      error: () => alert('Error al dar de alta'),
    });
  }*/
}
