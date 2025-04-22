import { Component, Output, EventEmitter   } from '@angular/core';

@Component({
  selector: 'app-header-profesor',
  imports: [],
  templateUrl: './header-profesor.component.html',
  styleUrl: './header-profesor.component.scss'
})
export class HeaderProfesorComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
