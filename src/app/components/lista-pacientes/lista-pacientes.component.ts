import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.css',
})
export class ListaPacientesComponent implements OnInit {
  pacientes: Paciente[] = [];
  pacientesFiltrados: Paciente[] = [];
  busqueda: string = '';

  constructor(
    private pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe((data) => {
      this.pacientes = data;
      this.pacientesFiltrados = data;
    });
  }
  filtrarPacientes() {
    const filtro = this.busqueda.toLowerCase();
    this.pacientesFiltrados = this.pacientes.filter(
      (p) =>
        p.nombre.toLowerCase().includes(filtro) || p.cedula.includes(filtro)
    );
  }

  confirmarEliminar(id: string | undefined): void {
    if (!id) {
      console.error('ID inválido para eliminar');
      return;
    }
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacienteService.deletePaciente(id).subscribe(() => {
          Swal.fire('Eliminado', 'El paciente fue eliminado.', 'success');
          this.ngOnInit(); // recargar lista
        });
      }
    });
  }

  editarPaciente(id: string | undefined): void {
    if (!id) return;
    // Aquí se redirigirá a la vista de edición
    console.log('Editar paciente con ID:', id);
    this.router.navigate(['/editar', id]);
  }

  verHistorial(id: string | undefined): void {
    if (!id) return;
    this.router.navigate(['/historiales', id]);
  }
  
}
