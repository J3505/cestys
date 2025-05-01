import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-curso',
  imports: [],
  templateUrl: './sidebar-curso.component.html',
  styleUrl: './sidebar-curso.component.scss'
})
export class SidebarCursoComponent {

  
  cursoCategoria =[
    { label : "Cursos de especializacion", cantidad: "10" },
    { label : "Administración y Gestión Empresarial", cantidad: "10" },
    { label : "Contable y Financiera", cantidad: "10" },
    { label : "Tecnología e Informática", cantidad: "10" },
    { label : "Construcción y Topografía", cantidad: "10" },
  ]

}
