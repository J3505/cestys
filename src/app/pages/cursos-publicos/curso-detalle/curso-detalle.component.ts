import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarCursoComponent } from '../sidebar-curso/sidebar-curso.component';
import { ComentariosEstudiantesComponent } from '../comentarios-estudiantes/comentarios-estudiantes.component';

import { CommonModule } from '@angular/common';
import { CursoService } from '../../../core/services/curso.service';

import { ModuloService } from '../../../core/services/modulo.service';
import { Curso } from '../../../core/models/curso';



@Component({
  selector: 'app-curso-detalle',
  imports: [SidebarCursoComponent, ComentariosEstudiantesComponent, CommonModule],
  templateUrl: './curso-detalle.component.html',
  styleUrl: './curso-detalle.component.scss',
})
export default class CursoDetalleComponent implements OnInit {

  curso?: Curso; // Definimos la variable curso como un objeto de tipo Curso
  estudiante = true; // por ejemplo para mostrar sección de comentarios
 

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService,
  ) {}
    // this.cursoId = this.route.snapshot.paramMap.get('id')
  //   this.route.paramMap.subscribe((params) => {
  //     this.cursoId = params.get('id') || '';
  //   });

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id');
    if(id){
      this.cursoService.getCurso(id).subscribe((curso:Curso) => {
        if (curso) {
          this.curso = curso;
        }
      })
      console.log(id);
    }
    
  }

  
}
