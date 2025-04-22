import { Component } from '@angular/core';
import { SidebarProfesorComponent } from "../sidebar-profesor/sidebar-profesor.component";
import { RouterOutlet } from '@angular/router';
import { HeaderProfesorComponent } from '../header-profesor/header-profesor.component';

@Component({
  selector: 'app-layout-profesor',
  imports: [RouterOutlet, HeaderProfesorComponent, SidebarProfesorComponent],
  templateUrl: './layout-profesor.component.html',
  styleUrl: './layout-profesor.component.scss'
})
export default class LayoutProfesorComponent {
  isSidebarActive = true;

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

}
