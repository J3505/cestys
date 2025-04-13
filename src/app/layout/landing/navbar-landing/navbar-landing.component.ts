import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-landing',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar-landing.component.html',
  styleUrl: './navbar-landing.component.scss'
})
export class NavbarLandingComponent {
  menuActivo = false;

  toggleMenu(): void {
    this.menuActivo = !this.menuActivo;
  }

  cerrarMenu(): void {
    this.menuActivo = false;
  }
  // imagenempresa:string ='assets/cestys.png'

  // isMenuOpen = false;
  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

}
