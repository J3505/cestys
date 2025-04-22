import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-profesor',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-profesor.component.html',
  styleUrl: './sidebar-profesor.component.scss'
})
export class SidebarProfesorComponent {
  @Input() active: boolean = false;
}
