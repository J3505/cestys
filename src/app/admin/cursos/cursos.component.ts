import { Component, computed, effect, OnInit, signal } from '@angular/core';

import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import { TextareaModule } from 'primeng/textarea';

import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CommonModule, NgClass } from '@angular/common';

import { CursoService } from '../../core/services/curso.service';
import { CategoriaService } from '../../core/services/categoria.service';
import { Categoria } from '../../core/models/categoria';
import { Curso } from '../../core/models/curso';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalCategoriaComponent } from './modal-categoria/modal-categoria.component';
import { ModalCursoComponent } from './modal-curso/modal-curso.component';
import { TablaCursoComponent } from './tabla-curso/tabla-curso.component';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Modulo } from '../../core/models/modulo';
import { Tema } from '../../core/models/tema';

import { ModalTemaComponent } from "./modal-tema/modal-tema.component";
import { UtilitiService } from '../../core/services/utiliti.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-cursos',
  imports: [
    InputTextModule,
    FormsModule,
    TextareaModule,
    ToastModule,
    NgClass,
    TableModule,
    DialogModule,
    ColorPickerModule,
    ReactiveFormsModule,
    ModalCategoriaComponent,
    ModalCursoComponent,
    TablaCursoComponent,
    ConfirmDialogModule,
    CommonModule,
    ButtonModule,
  ],
  // ModalModuloComponent,
  // ModalTemaComponent
  // FileUpload,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
  providers: [MessageService, ConfirmationService],
})
export default class CursosComponent implements OnInit {
  // implements OnInit
  cursos: Curso[] = [];
  // textare
  value!: string;
  categorias: Categoria[] = [];

  cities: City[] | undefined;
  selectedCity: City | undefined;

  /// modal categoria Padre
  visibleModal: boolean = false;
  categoriaSeleccionada: Categoria | null = null;

  // modal curso padre
  cursoSeleccionado: Curso | null = null;
  visibleModalCurso: boolean = false;

  // modal modulo
  moduloSeleccionado: Modulo | null = null;
  visibleModalModulo: boolean = false;


  // modal tema
  temaSeleccionado: Tema | null = null;
  visibleModalTema: boolean = false;

  colorMap: Record<string, { bg: string; text: string }> = {};

  constructor(
    private messageService: MessageService,
    private cursoService: CursoService,
    private categoriaService: CategoriaService,
    private confirmationService: ConfirmationService,
    private utilitiService: UtilitiService
  ) {}

  ngOnInit() {
    this.getCursos();
    this.getCategorias();

    this.utilitiService.getColorMap().subscribe((mapa) => {
      this.colorMap = mapa;
    });

  }

  getCursos() {
    this.cursoService.getCursos().subscribe({
      next: (data) => {
        this.cursos = data;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudieron cargar los cursos',
        });
      },
    });
  }

  // En el componente padre
  editarCurso(curso: Curso) {
  this.cursoSeleccionado = { ...curso }; // copia segura del curso
  this.visibleModalCurso = true;
}


  getCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (data) => {
        this.categorias = data.categorias;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudieron cargar las categorías',
        });
      },
    });
  }

  //  Modulo inicializar
  abrirModalCrearModulo(){
    this.visibleModalModulo = true;
    this.moduloSeleccionado = null;

  }

  cerrarModalModulo() {
    this.visibleModalModulo = false;
    this.moduloSeleccionado = null;
  }
  onModuloGuardado() {
    this.getCursos();
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Módulo guardado correctamente',
    });
    this.cerrarModalModulo();
  }
  // Modulo fin

  //  Tema inicializar
  abrirModalCrearTema(){
    this.visibleModalTema = true;
    this.temaSeleccionado = null;

  }

  cerrarModalTema() {
    this.visibleModalTema = false;
    this.temaSeleccionado = null;
  }

  onTemaGuardado() {
    this.getCategorias();
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Tema guardado correctamente',
    });
    this.cerrarModalTema();
  }
  // Tema fin

  //  boton para crear curso inicializar
  abrirModalCrearCurso(){
    this.visibleModalCurso = true;
    this.cursoSeleccionado = null;

  }

  cerrarModalCurso() {
    this.visibleModalCurso = false;
    this.cursoSeleccionado = null;
  }

  onCursoGuardado() {
    this.getCursos();
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Curso  guardado correctamente',
    });
    this.cerrarModalCurso();
  }
  //  boton para crear curso fin

  /// boton para categoria
  abrirModalCrear() {
    this.categoriaSeleccionada = null;
    this.visibleModal = true;
  }

  abrirModalEditar(categoria: Categoria) {
    this.categoriaSeleccionada = { ...categoria };
    this.visibleModal = true;
  }

  cerrarModal() {
    this.visibleModal = false;
    this.categoriaSeleccionada = null;
  }

  onCategoriaGuardada() {
    this.getCategorias();
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Categoría guardada correctamente',
    });
    this.cerrarModal();
  }

  eliminarCategoria(id: number) {
    // console.log('no sale nada', this.eliminarCategoria);
    this.confirmationService.confirm({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar esta categoría?',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonProps: {
        label: 'Eliminar',
        icon: 'pi pi-check',
        severity: 'danger',
      },
      rejectButtonProps: {
        label: 'Cancelar',
        icon: 'pi pi-times',
        outlined: true,
      },
      accept: () => {
        this.categoriaService.deleteCategoria(id).subscribe({
          next: () => {
            this.getCategorias();
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Categoría eliminada correctamente',
              life: 3000,
            });
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'No se pudo eliminar la categoría',
              life: 3000,
            });
          },
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cancelado',
          detail: 'Eliminación cancelada',
          life: 3000,
        });
      },
    });
  }
}
