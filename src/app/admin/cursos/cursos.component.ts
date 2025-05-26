import { Component, computed, effect, OnInit, signal } from '@angular/core';

import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Select } from 'primeng/select';
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
import { ColorItem } from '../../core/models/colorItem';
import { IconItem } from '../../core/models/IconItem';
import { UtilitiService } from '../../core/services/utiliti.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

// interface PrimeNgUploadEvent {
//   originalEvent: HttpEvent<any>;
//   files: File[];
// }

// interface UploadEvent {
//   originalEvent: HttpEvent<any>;
//   files: File[];
// }
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-cursos',
  imports: [
    // Dialog,

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

  // utilidades ini
  // colores: ColorItem[] = [];
  // iconos: IconItem[] = [];
  // filteredIcons: any[] = [];

  // showPalette = false;
  // showIconPalette = false;

  // selectedColor = { name: 'Sky', hex: '#3B82F6' };
  // selectedIcon = { name: 'Folder', class: 'fa-solid fa-folder' };

  // utilidades fin

  constructor(
    private messageService: MessageService,
    private cursoService: CursoService,
    private categoriaService: CategoriaService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.getCursos();
    this.getCategorias();
  }

  // getHexColor(colorName: string): string {
  //   return (
  //     this.colores.find((c) => c.name.toLowerCase() === colorName.toLowerCase())
  //       ?.hex || '#ccc'
  //   );
  // }

  // modal de categorias
  // modalCategoria() {
  //   this.visible = true;
  // }

  // editarCategoria(categoria: Categoria) {
  //   this.categoriaSeleccionada = categoria;
  //   this.visible = true;
  // }

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
    console.log('no sale nada', this.eliminarCategoria);
    
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
