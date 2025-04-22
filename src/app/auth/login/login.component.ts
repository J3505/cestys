import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  constructor(private router: Router) {}

  login(rol: string) {
    // Simula un login con rol enviado
    const user = { rol };

    switch (user.rol) {
      case 'ADMIN':
        this.router.navigate(['/admin']);
        break;
      case 'PROFESOR':
        this.router.navigate(['/profesor']);
        break;
      case 'ESTUDIANTE':
        this.router.navigate(['/estudiante']);
        break;
      default:
        alert('Rol no reconocido');
    }
  }

}
