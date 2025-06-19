import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-pacientes';

  constructor(private router: Router) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
  get mostrarBotonCerrarSesion(): boolean {
    const ruta = this.router.url;
    const usuario = localStorage.getItem('usuario');
    return usuario !== null && ruta !== '/login' && ruta !== '/';
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}


