import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {

  paciente: Paciente = {
    nombre: '',
    edad: 0,
    cedula: '',
    telefono: '',
    direccion: '',
  };

  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.pacienteService.getPacientePorId(this.id).subscribe(p => {
      this.paciente = p;
    });
  }

  actualizarPaciente(): void {
    this.pacienteService.actualizarPaciente(this.id, this.paciente).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Paciente actualizado',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
      });
      this.router.navigate(['/lista']);
    });
  }
}
