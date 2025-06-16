import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CitaService, Cita } from '../../services/cita.service';

@Component({
  selector: 'app-agenda-citas',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './agenda-citas.component.html',
  styleUrl: './agenda-citas.component.css'
})
export class AgendaCitasComponent {
  cita: Cita = {
    cedula: '',
    doctor: '',
    fecha: '',
    hora: '',
    motivo: ''
  };

  constructor(
    private citaService: CitaService,
    private router: Router
  ) {}

  guardarCita() {
    this.citaService.guardarCita(this.cita).subscribe({
      next: () => {
        alert('✅ Cita agendada correctamente');
        this.router.navigate(['/']);
      },
      error: () => {
        alert('❌ Ocurrió un error al guardar la cita');
      }
    });
  }
}