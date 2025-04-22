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



  login() {
    const user = { rol: 'ADMIN' }; // este valor vendría del backend

    if (user.rol === 'ADMIN') {
      this.router.navigate(['/admin']);
    } else if (user.rol === 'PROFESOR') {
      this.router.navigate(['/profesor']);
    } else if (user.rol === 'ESTUDIANTE') {
      this.router.navigate(['/estudiante']);
    }
  }

}
