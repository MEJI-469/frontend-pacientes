import { Component, OnInit } from '@angular/core';
import { CitaService, Cita } from '../../services/cita.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-citas',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-citas.component.html',
  styleUrl: './lista-citas.component.css',
})
export class ListaCitasComponent {
  citas: Cita[] = [];

  constructor(private citaService: CitaService) {}
  
  filtroCedula: string = '';
  filtroFecha: string = '';
  citasFiltradas: Cita[] = [];

  ngOnInit(): void {
    this.citaService.obtenerCitas().subscribe({
      next: (data) => {
        this.citas = data;
        this.aplicarFiltro();
      },
      error: (e) => console.error('Error al cargar citas:', e),
    });
  }

  aplicarFiltro(): void {
    this.citasFiltradas = this.citas.filter((cita) => {
      const coincideCedula =
        this.filtroCedula === '' || cita.cedula.includes(this.filtroCedula);
      const coincideFecha =
        this.filtroFecha === '' || cita.fecha === this.filtroFecha;
      return coincideCedula && coincideFecha;
    });
  }

  eliminar(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta cita?')) {
      this.citaService.eliminarCita(id).subscribe({
        next: () => {
          this.citas = this.citas.filter((c) => c.id !== id);
          this.aplicarFiltro();
        },
        error: () => alert('Error al eliminar la cita'),
      });
    }
  }
}
