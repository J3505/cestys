import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-header-estudiante',
  imports: [],
  templateUrl: './header-estudiante.component.html',
  styleUrl: './header-estudiante.component.scss'
})
export class HeaderEstudianteComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

}
