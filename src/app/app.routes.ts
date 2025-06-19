import { AuthGuard } from './services/auth.guard';
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
  { path: 'registro', component: RegistroPacienteComponent, data: { animation: 'RegistroPage' },canActivate: [AuthGuard] },
  { path: 'lista', component: ListaPacientesComponent, data: { animation: 'ListaPage' } ,canActivate: [AuthGuard] },
  { path: 'editar/:id', component: EditarPacienteComponent, data: { animation: 'EditarPage' },canActivate: [AuthGuard] },
  { path: 'citas', component: AgendaCitasComponent,canActivate: [AuthGuard] },
  { path: 'citas-agendadas', component: ListaCitasComponent,canActivate: [AuthGuard] },

  // doctor
  { path: 'doctor', component: DoctorDashboardComponent,canActivate: [AuthGuard] },
  { path: 'mis-citas', component: DoctorCitasComponent ,canActivate: [AuthGuard]},
  { path: 'mis-altas', component: PacientesAltaDoctorComponent,canActivate: [AuthGuard] },
  { path: 'historiales/:id', component: VerHistorialesComponent, data: { animation: 'VerHistorialPage' } ,canActivate: [AuthGuard]},
  { path: 'historiales/:id/agregar', component: AgregarHistorialComponent, data: { animation: 'AgregarHistorialPage' },canActivate: [AuthGuard] },

  // Ruta por defecto
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
