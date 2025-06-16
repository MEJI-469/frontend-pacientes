import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../models/paciente';
import { HistorialMedico } from '../models/paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private baseUrl = 'http://localhost:8080/api/pacientes';

  constructor(private http: HttpClient) {}

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.baseUrl);
  }

  addPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.baseUrl, paciente);
  }

  deletePaciente(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getPacientePorId(id: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.baseUrl}/${id}`);
  }

  actualizarPaciente(id: string, paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.baseUrl}/${id}`, paciente);
  }

  getHistoriales(id: string): Observable<HistorialMedico[]> {
    return this.http.get<HistorialMedico[]>(`${this.baseUrl}/${id}/historial`);
  }

  agregarHistorial(id: string, historial: HistorialMedico): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/${id}/historial`, historial);
  }
}
