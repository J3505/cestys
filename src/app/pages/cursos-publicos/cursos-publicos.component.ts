import { Component } from '@angular/core';
import { NavbarLandingComponent } from '../../layout/landing/navbar-landing/navbar-landing.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cursos-publicos',
  imports: [NavbarLandingComponent, RouterLink],
  templateUrl: './cursos-publicos.component.html',
  styleUrl: './cursos-publicos.component.scss',
})
export default class CursosPublicosComponent {

}
