import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarCursoComponent } from '../sidebar-curso/sidebar-curso.component';
import { ComentariosEstudiantesComponent } from '../comentarios-estudiantes/comentarios-estudiantes.component';
import { ServicesService } from '../../../core/services.service';
import { Curso } from '../../../core/curso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curso-detalle',
  imports: [SidebarCursoComponent, ComentariosEstudiantesComponent, CommonModule],
  templateUrl: './curso-detalle.component.html',
  styleUrl: './curso-detalle.component.scss',
})
export default class CursoDetalleComponent implements OnInit {
  // estudiante: 'estudiante' | string = '';
  // cursoId: string | null = null;
  curso!: Curso; // Definimos la variable curso como un objeto de tipo Curso
  estudiante = true; // por ejemplo para mostrar sección de comentarios


  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) {}
    // this.cursoId = this.route.snapshot.paramMap.get('id')
  //   this.route.paramMap.subscribe((params) => {
  //     this.cursoId = params.get('id') || '';
  //   });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicesService.obtenerCursoPorId(id).subscribe((curso) =>{
      if (curso){
        this.curso = curso;
      }
    })
  }
}
