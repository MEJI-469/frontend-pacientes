import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router,private location: Location) {}

  // Redirigir si ya está logueado
  ngOnInit(): void {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (usuario && usuario.rol) {
      if (usuario.rol === 'DOCTOR') {
        this.router.navigate(['/doctor']);
      } else if (usuario.rol === 'SECRETARIA') {
        this.router.navigate(['/secretaria']);
      }
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (usuario) => {
        if (usuario) {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          if (usuario.rol === 'DOCTOR') {
            this.router.navigate(['/doctor']);
          } else if (usuario.rol === 'SECRETARIA') {
            this.router.navigate(['/secretaria']);
          }
        } else {
          this.errorMessage = 'Credenciales incorrectas';
        }
      },
      (error) => {
        this.errorMessage = 'Error en el servidor';
      }
    );
  }
  volver():void{
    this.router.navigate(['/']);
  }
}
