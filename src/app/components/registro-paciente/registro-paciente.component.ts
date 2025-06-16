import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro-paciente.component.html',
  styleUrl: './registro-paciente.component.css',
})
export class RegistroPacienteComponent {
  paciente: Paciente = {
    nombre: '',
    edad: 0,
    cedula: '',
    telefono: '',
    direccion: '',
  };

  constructor(private pacienteService: PacienteService) {}

  guardarPaciente() {
    this.pacienteService.addPaciente(this.paciente).subscribe(() => {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Paciente registrado correctamente',
        showConfirmButton: false,
        timer: 2000,
      });
      this.paciente = {
        nombre: '',
        edad: 0,
        cedula: '',
        telefono: '',
        direccion: '',
      };
    });
  }
}
