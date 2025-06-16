import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cita {
  cedula: string;
  doctor: string;
  fecha: string;
  hora: string;
  motivo: string;
}

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private url = 'http://localhost:8080/api/citas';

  constructor(private http: HttpClient) {}

  guardarCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(this.url, cita);
  }
}
