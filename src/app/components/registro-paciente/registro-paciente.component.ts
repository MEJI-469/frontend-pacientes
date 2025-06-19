import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro-paciente.component.html',
  styleUrl: './registro-paciente.component.css',
})
export class RegistroPacienteComponent implements OnInit {
  paciente: Paciente = {
    nombre: '',
    edad: 0,
    cedula: '',
    telefono: '',
    direccion: '',
  };

  constructor(private pacienteService: PacienteService, private router: Router,private location: Location) {}

  ngOnInit(): void {
  const rol = JSON.parse(localStorage.getItem('usuario') || '{}').rol;
  if (rol !== 'SECRETARIA') {
    alert('Acceso denegado. Solo la secretaria puede registrar pacientes.');
    this.router.navigate(['/']);
  }
}

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
  volver(): void {
    this.location.back() 
  }
}
