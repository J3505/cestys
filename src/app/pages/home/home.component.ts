import { Component } from '@angular/core';
// import LayoutLandingComponent from "../../layout/landing/layout-landing/layout-landing.component";
import { CardsComponent } from "./cards/cards.component";
import { CardsPopularesComponent } from "./cards-populares/cards-populares.component";

@Component({
  selector: 'app-home',
  imports: [CardsComponent, CardsPopularesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
