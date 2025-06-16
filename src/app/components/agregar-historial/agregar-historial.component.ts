import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { HistorialMedico } from '../../models/paciente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-historial',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './agregar-historial.component.html',
  styleUrls: ['./agregar-historial.component.css']
})
export class AgregarHistorialComponent {

  id: string = '';
  nuevoHistorial: HistorialMedico = {
    descripcion: '',
    fecha: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, private pacienteService: PacienteService) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  guardar(): void {
    if (!this.nuevoHistorial.descripcion || !this.nuevoHistorial.fecha) return;

    this.pacienteService.agregarHistorial(this.id, this.nuevoHistorial).subscribe(() => {
      Swal.fire({
        icon: 'success',
        toast: true,
        title: 'Historial agregado',
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
      });
      this.router.navigate(['/historiales', this.id]);
    });
  }

  volver(): void {
  this.router.navigate(['/historiales', this.id]);
}

}
