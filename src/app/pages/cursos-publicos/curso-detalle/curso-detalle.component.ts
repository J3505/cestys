import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarCursoComponent } from "../sidebar-curso/sidebar-curso.component";
import { ComentariosEstudiantesComponent } from "../comentarios-estudiantes/comentarios-estudiantes.component";

@Component({
  selector: 'app-curso-detalle',
  imports: [SidebarCursoComponent, ComentariosEstudiantesComponent],
  templateUrl: './curso-detalle.component.html',
  styleUrl: './curso-detalle.component.scss'
})
export default class CursoDetalleComponent {
  estudiante: 'estudiante' | string = '' ;
  cursoId: string | null = null;

  constructor( private route: ActivatedRoute){
    // this.cursoId = this.route.snapshot.paramMap.get('id')
    this.route.paramMap.subscribe(params => {
      this.cursoId = params.get('id') || '';
    });
  }

}
