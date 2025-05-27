import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgClass } from '@angular/common';
import { CursoService } from '../../../core/services/curso.service';
import { Curso } from '../../../core/models/curso';
import { UsuarioService } from '../../../core/services/usuario.service';

import { PaginatorModule, PaginatorState } from 'primeng/paginator';

// Fecha y hora fortmateo
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../../../core/models/categoria';
import { Modulo } from '../../../core/models/modulo';
import { Tema } from '../../../core/models/tema';
import { CategoriaService } from '../../../core/services/categoria.service';
import { ModuloService } from '../../../core/services/modulo.service';
import { TemaService } from '../../../core/services/tema.service';
import { Usuario } from '../../../core/models/usuario';

registerLocaleData(localeEs);
@Component({
  selector: 'app-tabla-curso',
  imports: [
    ConfirmDialog,
    ToastModule,
    ButtonModule,
    NgClass,
    CommonModule,
    PaginatorModule,
    FormsModule,
  ],
  templateUrl: './tabla-curso.component.html',
  styleUrl: './tabla-curso.component.scss',

  providers: [
    MessageService,
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'es' },
  ],
})
export class TablaCursoComponent implements OnInit {
  // interfaces de los cursos
  categorias: Categoria[] = [];
  modulos: Modulo[] = [];
  temas: Tema[] = [];
  cursos: Curso[] = [];

  // filtro para instructor
  instructores: Usuario[] = [];
  instructoresFiltrados: Usuario[] = [];

  /// total de cursos
  totalCursos: number = 0;

  // Variables para el filtrado
  cursosFiltrados: Curso[] = [];
  cursosPaginados: Curso[] = [];

  // Paginación
  first: number = 0;
  rows: number = 5;

  // Variables para el filtrado
  filtroNombre: string = '';
  filtroCategoria: string = '';
  filtroInstructor: string = '';

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private cursoService: CursoService,
    private usuarioService: UsuarioService,
    private categoriaService: CategoriaService,
    private moduloservice: ModuloService,
    private temasService: TemaService
  ) {}

  ngOnInit() {
    this.getCursos();
    this.getUsuario();
    this.getCategorias();
  }

  confirm() {
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Please confirm to proceed moving forward.',
      icon: 'pi pi-exclamation-circle',
      rejectButtonProps: {
        label: 'Cancel',
        icon: 'pi pi-times',
        outlined: true,
        size: 'small',
      },
      acceptButtonProps: {
        label: 'Save',
        icon: 'pi pi-check',
        size: 'small',
      },
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }

  getUsuario() {
    this.usuarioService.getUsuarios().subscribe((data) => {
      // console.log(data);
    });
  }

  filtrarInstructores(event: any) {
    const query = event.query.toLowerCase();
    this.instructoresFiltrados = this.instructores.filter((instructor) =>
      `${instructor.nombre} ${instructor.apellido}`
        .toLowerCase()
        .includes(query)
    );
  }

  getCursos() {
    this.cursoService.getCursos().subscribe((data: Curso[]) => {
      this.cursos = data;
      // console.log(this.cursos);

      this.filtrarCursos();
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

  // filtros y paginación
  // paginación
  // onPageChange(event: PaginatorState) {
  //   this.first = event.first ?? 0;
  //   this.rows = event.rows ?? 5;
  //   this.actualizarCursosPaginados();

  //   console.log('Total cursos:', this.cursos.length);
  //   console.log('Cursos filtrados:', this.cursosFiltrados.length);
  // }

  onPageChange(event: any) {
  this.first = event.first;
  this.rows = event.rows;
  this.actualizarCursosPaginados();
}

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((data) => {
      this.categorias = data.categorias;
      this.totalCursos = data.total;

      if (this.categorias.length > 0) {
        this.filtroCategoria = String(this.categorias[0].id);
        this.filtrarCursos();
      }
    });
  }

  seleccionarCategoria(idCategoria: number) {
    this.filtroCategoria = String(idCategoria);
    this.first = 0;
    this.filtrarCursos();
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
    const nombreCoincide = curso.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase());
    const instructorCoincide =
      curso.instructor &&
      (curso.instructor.nombre.toLowerCase().includes(this.filtroInstructor.toLowerCase()) ||
       curso.instructor.apellido?.toLowerCase().includes(this.filtroInstructor.toLowerCase()));
    const categoriaCoincide =
      !this.filtroCategoria || curso.categoria.id === Number(this.filtroCategoria);

    return nombreCoincide && instructorCoincide && categoriaCoincide;
  });

  // Reiniciar a la primera página
  this.first = 0;

  // Actualizar cursosPaginados
  this.actualizarCursosPaginados();
}



actualizarCursosPaginados() {
  const start = this.first;
  const end = this.first + this.rows;
  this.cursosPaginados = this.cursosFiltrados.slice(start, end);
}

eliminarCurso(curso: Curso) {
  this.confirmationService.confirm({
    message: `¿Estás seguro de que quieres eliminar el curso "${curso.nombre}"?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cursoService.deleteCurso(curso.id).subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: `Curso "${curso.nombre}" eliminado correctamente.`,
          });
          this.getCursos();
        });
      },
    });
  }
}
