import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-curso',
  imports: [],
  templateUrl: './sidebar-curso.component.html',
  styleUrl: './sidebar-curso.component.scss'
})
export class SidebarCursoComponent {

  
  cursoCategoria =[
    { label : "Administración y gestión empresarial", cantidad: "10" },
    { label : "Ciencias de la salud", cantidad: "10" },
    { label : "Gestión pública", cantidad: "10" },
    { label : "Ingeniería y Arquitectura", cantidad: "10" },
    { label : "Tecnología e Informática", cantidad: "10" },
  ]

}
