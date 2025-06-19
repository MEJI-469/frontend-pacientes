import { Component, OnInit } from '@angular/core';
import { PacienteService} from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pacientes-alta-doctor',
  imports: [CommonModule],
  templateUrl: './pacientes-alta-doctor.component.html',
  styleUrl: './pacientes-alta-doctor.component.css'
})
export class PacientesAltaDoctorComponent implements OnInit {
  pacientes: Paciente[] = [];
  doctor: string = '';

  constructor(private pacienteService: PacienteService, private location: Location) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.doctor = user.nombre || '';

    this.pacienteService.obtenerPacientesPorDoctor(this.doctor).subscribe(pacientes => {
      this.pacientes = pacientes.filter(p => p.alta);
    });
  }
  volver():void{
    this.location.back();
  }
}