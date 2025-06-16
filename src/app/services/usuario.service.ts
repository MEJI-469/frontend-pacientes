import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: string;
  nombre: string;
  username: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) {}

  obtenerDoctores(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}?rol=DOCTOR`);
  }
}
