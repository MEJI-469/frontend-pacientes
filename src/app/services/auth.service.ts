import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient,private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  getUsuario(): any {
    return JSON.parse(localStorage.getItem('usuario') || 'null');
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
    //localStorage.removeItem('usuario');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('usuario');
  }

  getRol(): string | null {
    const usuario = this.getUsuario();
    return usuario ? usuario.rol : null;
  }
}
