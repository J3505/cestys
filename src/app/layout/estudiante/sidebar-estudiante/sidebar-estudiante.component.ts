import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-estudiante',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-estudiante.component.html',
  styleUrl: './sidebar-estudiante.component.scss'
})
export class SidebarEstudianteComponent {
  @Input() active: boolean = false;
}
