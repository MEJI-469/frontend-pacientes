import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cita {
  id?: string; // El ID puede ser opcional si se genera en el backend
  cedula: string;
  doctor: string;
  fecha: string;
  hora: string;
  motivo: string;
}

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  private url = 'http://localhost:8080/api/citas';

  constructor(private http: HttpClient) {}

  guardarCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(this.url, cita);
  }

  obtenerCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.url);
  }

  eliminarCita(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
