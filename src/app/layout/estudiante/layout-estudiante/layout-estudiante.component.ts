import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderEstudianteComponent } from "../header-estudiante/header-estudiante.component";
import { SidebarEstudianteComponent } from "../sidebar-estudiante/sidebar-estudiante.component";

@Component({
  selector: 'app-layout-estudiante',
  imports: [RouterOutlet, HeaderEstudianteComponent, SidebarEstudianteComponent],
  templateUrl: './layout-estudiante.component.html',
  styleUrl: './layout-estudiante.component.scss'
})
export default class LayoutEstudianteComponent {
  isSidebarActive = true;

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
