import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CitaService, Cita } from '../../services/cita.service';
import { UsuarioService, Usuario } from '../../services/usuario.service';

@Component({
  selector: 'app-agenda-citas',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './agenda-citas.component.html',
  styleUrl: './agenda-citas.component.css',
})
export class AgendaCitasComponent implements OnInit {
  cita: Cita = {
    cedula: '',
    doctor: '',
    fecha: '',
    hora: '',
    motivo: '',
  };

  constructor(private citaService: CitaService, private router: Router, private usuarioService: UsuarioService) {}

  listaDoctores: Usuario[] = [];

  ngOnInit(): void {
    this.usuarioService.obtenerDoctores().subscribe({
      next: (data) => (this.listaDoctores = data),
      error: () => alert('Error al cargar doctores'),
    });
  }
  guardarCita() {
    this.citaService.guardarCita(this.cita).subscribe({
      next: () => {
        alert('✅ Cita agendada correctamente');
        this.router.navigate(['/']);
      },
      error: () => {
        alert('❌ Ocurrió un error al guardar la cita');
      },
    });
  }
}
