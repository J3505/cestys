import { Component } from '@angular/core';
import { FooterLandingComponent } from "../footer-landing/footer-landing.component";
import { NavbarLandingComponent } from "../navbar-landing/navbar-landing.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-landing',
  imports: [FooterLandingComponent, NavbarLandingComponent, RouterOutlet],
  templateUrl: './layout-landing.component.html',
  styleUrl: './layout-landing.component.scss'
})
export default class LayoutLandingComponent {

}
