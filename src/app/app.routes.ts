import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroPacienteComponent } from './components/registro-paciente/registro-paciente.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component';
import { VerHistorialesComponent } from './components/ver-historiales/ver-historiales.component';
import { AgregarHistorialComponent } from './components/agregar-historial/agregar-historial.component';
import { LoginComponent } from './pages/login/login.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { SecretariaDashboardComponent } from './components/secretaria-dashboard/secretaria-dashboard.component';
import { AgendaCitasComponent } from './pages/agenda-citas/agenda-citas.component';
import { ListaCitasComponent } from './pages/lista-citas/lista-citas.component';
import { DoctorCitasComponent } from './pages/doctor-citas/doctor-citas.component';
import { PacientesAltaDoctorComponent } from './pages/pacientes-alta-doctor/pacientes-alta-doctor.component';

export const routes: Routes = [
  { path: '', component: InicioComponent, data: { animation: 'InicioPage' } },
  
  // rutas para login y roles
  { path: 'login', component: LoginComponent },
  
  // secretaria
  { path: 'secretaria', component: SecretariaDashboardComponent },
  { path: 'registro', component: RegistroPacienteComponent, data: { animation: 'RegistroPage' } },
  { path: 'lista', component: ListaPacientesComponent, data: { animation: 'ListaPage' }  },
  { path: 'editar/:id', component: EditarPacienteComponent, data: { animation: 'EditarPage' } },
  { path: 'citas', component: AgendaCitasComponent },
  { path: 'citas-agendadas', component: ListaCitasComponent },

  // doctor
  { path: 'doctor', component: DoctorDashboardComponent },
  { path: 'mis-citas', component: DoctorCitasComponent },
  { path: 'mis-altas', component: PacientesAltaDoctorComponent },
  { path: 'historiales/:id', component: VerHistorialesComponent, data: { animation: 'VerHistorialPage' } },
  { path: 'historiales/:id/agregar', component: AgregarHistorialComponent, data: { animation: 'AgregarHistorialPage' } },

  // Ruta por defecto
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
