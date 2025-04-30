import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-landing',
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './navbar-landing.component.html',
  styleUrl: './navbar-landing.component.scss'
})
export class NavbarLandingComponent {

  rutasHome = [
    {label: 'Inicio', path: '/' },
    {label: 'Cursos', path: '/cursos' },
    {label: 'Nosotros', path: '/nosotros' },
    {label: '+', path: '/' },
  ]


  menuActivo = false;

  toggleMenu(): void {
    this.menuActivo = !this.menuActivo;
  }

  cerrarMenu(): void {
    this.menuActivo = false;
  }

}
