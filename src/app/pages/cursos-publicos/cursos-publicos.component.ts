import { Component, OnInit } from '@angular/core';
import { NavbarLandingComponent } from '../../layout/landing/navbar-landing/navbar-landing.component';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../core/services/categoria.service';
import { Curso } from './interface/curso';
import { CursoService } from '../../core/services/curso.service';
import { ModuloService } from '../../core/services/modulo.service';
import { Modulo, Tema } from './interface/tema';
import { TemaService } from '../../core/services/tema.service';



@Component({
  selector: 'app-cursos-publicos',
  imports: [NavbarLandingComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './cursos-publicos.component.html',
  styleUrl: './cursos-publicos.component.scss',
})
export default class CursosPublicosComponent implements OnInit {

  categorias: { id: string; name: string }[] = [];
  modulos: Modulo[] = [];
  temas: Tema[] = [];

  paginaActual = 1;
  cursosPorPagina = 5; // Cambiado a 5 para mostrar 7 cursos por página
  paginasTotales = 1;
  cursos: Curso[] = [];
  cursosFiltrados: Curso[] = [];
  cursosPaginados: Curso[] = []; // Nueva propiedad para los cursos de la página actual
  filtroNombre: string = '';
  filtroCategoria: string = '';
  filtroInstructor: string = '';

  constructor(
    private CategoriaService: CategoriaService,
    private cursoService: CursoService,
    private moduloservice: ModuloService,
    private temasService: TemaService,
  ) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe((data) => {
      this.cursos = data;
      this.getCategorias(); // Obtiene las categorías al iniciar
      this.getModulos(); // Obtiene los modulos al iniciar
      console.log(data);
      
    });
  }
  getCursos() {
    this.cursoService.getCursos().subscribe((data) => {
      this.cursos = data;
      
    });
  }
 
  getCategorias() {
    this.CategoriaService.getCategorias().subscribe((data) => {
      this.categorias = data.map((categoria) => ({
        id: categoria.id.toString(),
        name: categoria.nombre,
      }));
    });
  }

  getModulos(){
    this.moduloservice.getModulos().subscribe((data)=>{
      this.modulos = data
    });
  }

  getTemas(id: number) {
    this.temasService.getTema(id).subscribe((data) => {
      this.temas = [data];
    });
  }
  // aplicarFiltros(): void {
  //   const filtrados = this.cursos.filter((curso) => {
  //     const coincideNombre = curso.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase());
  //     const coincideCategoria = this.filtroCategoria ? this.categorias.some(cat => cat.id === curso.categoria) : true;
  //     const coincideInstructor = (curso.instructor.nombre + ' ' + curso.instructor.apellido)
  //       .toLowerCase()
  //       .includes(this.filtroInstructor.toLowerCase());

  //     return coincideNombre && coincideCategoria && coincideInstructor;
  //   });

  //   this.cursosFiltrados = filtrados; // Almacena la lista completa filtrada
  //   this.paginasTotales = Math.ceil(filtrados.length / this.cursosPorPagina);
  //   this.paginaActual = 1; // Reinicia a la primera página solo al aplicar filtros
  //   this.actualizarCursosPaginados(); // Actualiza los cursos paginados
  // }

  actualizarCursosPaginados(): void {
    const inicio = (this.paginaActual - 1) * this.cursosPorPagina;
    const fin = inicio + this.cursosPorPagina;
    this.cursosPaginados = this.cursosFiltrados.slice(inicio, fin); // Usa cursosPaginados en lugar de cursosFiltrados
  }

  cambiarPagina(nuevaPagina: number): void {
    if (nuevaPagina >= 1 && nuevaPagina <= this.paginasTotales) {
      this.paginaActual = nuevaPagina;
      this.actualizarCursosPaginados(); // Actualiza los cursos de la página actual
    }
  }

  limpiarFiltros(): void {
    this.filtroNombre = '';
    this.filtroCategoria = '';
    this.filtroInstructor = ''; // Vuelve a aplicar los filtros para restaurar la lista completa
  }
}
