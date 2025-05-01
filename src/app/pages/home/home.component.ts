import { Component, OnInit } from '@angular/core';
// import LayoutLandingComponent from "../../layout/landing/layout-landing/layout-landing.component";
import { CardsComponent } from "./cards/cards.component";
import { CardsPopularesComponent } from "./cards-populares/cards-populares.component";
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  imports: [CardsComponent, CardsPopularesComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export default class HomeComponent  implements OnInit {

  telefono: string = "965835151";
  correo: string = "incitecsa@edu.com" 

  ngOnInit(): void { 
    AOS.init()
  }

}
