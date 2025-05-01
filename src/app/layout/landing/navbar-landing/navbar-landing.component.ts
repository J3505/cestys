import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-landing',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar-landing.component.html',
  styleUrl: './navbar-landing.component.scss'
})
export class NavbarLandingComponent {

  rutasHome = [
    {label: 'Inicio', icon:'icon-[line-md--home-alt-twotone]', path: '/' },
    {label: 'Cursos', icon:'icon-[mynaui--book-home-solid]', path: '/cursos' },
    {label: 'Nosotros', icon:'icon-[iconoir--home-user]', path: '/nosotros' }

  ]


  menuActivo = false;

  toggleMenu(): void {
    this.menuActivo = !this.menuActivo;
  }

  cerrarMenu(): void {
    this.menuActivo = false;
  }

}
