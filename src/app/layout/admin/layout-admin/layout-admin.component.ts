import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  // SidebarComponent, , RouterOutlet
  imports: [HeaderComponent, SidebarComponent,RouterOutlet],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss'
})
export default class LayoutAdminComponent {
  isSidebarActive = true;

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
