import { Component, OnInit } from '@angular/core';
import { NavbarLandingComponent } from '../../layout/landing/navbar-landing/navbar-landing.component';
import { RouterLink } from '@angular/router';

import { PaginatorModule, PaginatorState } from 'primeng/paginator';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../core/services/categoria.service';
import { CursoService } from '../../core/services/curso.service';
import { ModuloService } from '../../core/services/modulo.service';
import { TemaService } from '../../core/services/tema.service';

import { Modulo } from '../../core/models/modulo';
import { Tema } from '../../core/models/tema';
import { Curso } from '../../core/models/curso';
import { Categoria } from '../../core/models/categoria';

@Component({
  selector: 'app-cursos-publicos',
  imports: [
    NavbarLandingComponent,
    RouterLink,
    CommonModule,
    FormsModule,
    PaginatorModule,
  ],
  templateUrl: './cursos-publicos.component.html',
  styleUrl: './cursos-publicos.component.scss',
})
export default class CursosPublicosComponent implements OnInit {
  categorias: Categoria[] = [];
  modulos: Modulo[] = [];
  temas: Tema[] = [];
  cursos: Curso[] = [];
  // Variables para el filtrado
  cursosFiltrados: Curso[] = [];
  cursosPaginados: Curso[] = [];

  /// total de cursos
  totalCursos: number = 0;

  // Paginación
  first: number = 0;
  rows: number = 5;

  // Variables para el filtrado
  filtroNombre: string = '';
  filtroCategoria: string = '';
  filtroInstructor: string = '';
  // CONTACTO
  telefono: string = '904436204';
  constructor(
    private categoriaService: CategoriaService,
    private cursoService: CursoService,
    private moduloservice: ModuloService,
    private temasService: TemaService
  ) {}

  ngOnInit(): void {
    this.getCategorias();
    this.getModulos();
    this.getCursos();
  }

  // paginación
  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 5;
    this.actualizarCursosPaginados();
  }

  getCursos() {
    this.cursoService.getCursos().subscribe((data: Curso[]) => {
      this.cursos = data;
      console.log(this.cursos);

      this.filtrarCursos();
    });
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((data) => {
      this.categorias = data.categorias;
      this.totalCursos = data.total;

      if (this.categorias.length > 0) {
        const primeraCategoria = this.categorias[0];
        this.seleccionarCategoria(primeraCategoria.id);
      }
    });
  }

  getModulos() {
    this.moduloservice.getModulos().subscribe((data) => {
      this.modulos = data;
    });
  }

  getTemas(id: number) {
    this.temasService.getTema(id).subscribe((data) => {
      this.temas = [data];
    });
  }

  filtrarPorCategoria(nombreCategoria: string) {
    if (this.filtroCategoria === nombreCategoria) {
      this.filtroCategoria = ''; // Quita el filtro si se hace clic otra vez
    } else {
      this.filtroCategoria = nombreCategoria;
    }

    this.filtrarCursos();
  }

  filtrarCursos() {
    this.cursosFiltrados = this.cursos.filter((curso) => {
      const coincideNombre = curso.nombre
        .toLowerCase()
        .includes(this.filtroNombre.toLowerCase().trim());

      const coincideInstructor =
        curso.instructor?.nombre
          .toLowerCase()
          .includes(this.filtroInstructor.toLowerCase()) || false;

      const coincideCategoria = this.filtroCategoria
        ? curso.categoriaId === Number(this.filtroCategoria)
        : true;

      return coincideNombre && coincideInstructor && coincideCategoria;
    });
    this.first = 0; // Reinicia a la primera página al aplicar filtros
    this.actualizarCursosPaginados();
  }

  actualizarCursosPaginados() {
    const start = this.first;
    const end = this.first + this.rows;
    this.cursosPaginados = this.cursosFiltrados.slice(start, end);
  }

  seleccionarCategoria(idCategoria: number) {
    this.filtroCategoria = String(idCategoria);
    this.first = 0;
    this.filtrarCursos();
  }

  limpiarFiltros() {
    this.filtroNombre = '';
    this.filtroCategoria = '';
    this.filtroInstructor = '';
    this.first = 0;
    this.filtrarCursos();
  }
}
