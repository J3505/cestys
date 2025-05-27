import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { NodeService } from '../../../core/models/NodeService';

import { TextareaModule } from 'primeng/textarea';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Curso } from '../../../core/models/curso';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Categoria } from '../../../core/models/categoria';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../core/models/usuario';
import { CursoService } from '../../../core/services/curso.service';
import { Modulo } from '../../../core/models/modulo';
import { ModalModuloComponent } from '../modal-modulo/modal-modulo.component';

@Component({
  selector: 'app-modal-curso',
  imports: [
    Dialog,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CommonModule,
    TextareaModule,
    ReactiveFormsModule,
    ToastModule,
    ModalModuloComponent,
  ],
  templateUrl: './modal-curso.component.html',
  styleUrl: './modal-curso.component.scss',
  providers: [NodeService, MessageService],
})
export class ModalCursoComponent implements OnInit, OnChanges {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() CursoGuardado = new EventEmitter<void>();
  @Input() cursoSeleccionado: Curso | null = null;

  formCurso: FormGroup;

  // Servicios
  categorias: Categoria[] = [];
  instructores: Usuario[] = [];
  estudiantes: Usuario[] = [];
  modulos: Modulo[] = [];

  visibleModalModulo = false;
  moduloSeleccionado: Modulo | null = null;

  value!: string;
  nodes!: any[];
  selectedNodes: any;
  estados = Object.values('activo');

  constructor(
    private nodeService: NodeService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private categoriaService: CategoriaService,
    private usuarioService: UsuarioService,
    private cursoService: CursoService
  ) {
    this.formCurso = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      horas: [0, [Validators.required, Validators.min(1)]],
      precio: [null],
      descuento: [null],
      imagen: [''],
      categoriaId: [null, Validators.required],
      instructorId: ['', Validators.required],
      estado: ['Activo', Validators.required],
      // modulos: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.getCategorias();
    this.getInstructores();
    this.getEstudiantes();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cursoSeleccionado'] && this.cursoSeleccionado) {
      this.formCurso.patchValue({
        nombre: this.cursoSeleccionado.nombre,
        descripcion: this.cursoSeleccionado.descripcion,
        fechaInicio: this.cursoSeleccionado.fechaInicio,
        fechaFin: this.cursoSeleccionado.fechaFin,
        horas: this.cursoSeleccionado.horas,
        precio: this.cursoSeleccionado.precio,
        descuento: this.cursoSeleccionado.descuento,
        imagen: this.cursoSeleccionado.imagen,
        categoriaId: this.cursoSeleccionado.categoriaId,
        instructorId: this.cursoSeleccionado.instructorId,
        estado: this.cursoSeleccionado.estado,
      });
      this.modulos = this.cursoSeleccionado.modulos || [];
    }
  }

  abrirModalModulo(modulo: Modulo | null = null) {
    if (!this.cursoSeleccionado && modulo) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se puede editar un módulo sin un curso seleccionado.',
      });
      return;
    }
    this.moduloSeleccionado = modulo;
    this.visibleModalModulo = true;
  }

  onModuloGuardado(modulo: Modulo) {
    if (this.moduloSeleccionado) {
      // Editar módulo existente
      const index = this.modulos.findIndex((m) => m.id === modulo.id);
      if (index !== -1) {
        this.modulos[index] = modulo;
      }
    } else {
      // Agregar nuevo módulo
      this.modulos.push({ ...modulo, id: modulo.id || `temp-${Date.now()}` }); // ID temporal si no hay backend
    }
    this.visibleModalModulo = false;
  }

  eliminarModulo(index: number) {
    this.modulos.splice(index, 1);
  }

  guardarCurso() {
    if (this.formCurso.invalid) {
      this.formCurso.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor, completa todos los campos requeridos.',
      });
      return;
    }

    const cursoData: Curso = {
      ...this.formCurso.value,
      // Solo incluir modulos si no está vacío
      ...(this.modulos.length > 0 && { modulos: this.modulos }),
    };

    const cursoServiceCall = this.cursoSeleccionado
      ? this.cursoService.updateCurso(this.cursoSeleccionado.id, cursoData)
      : this.cursoService.createCurso(cursoData);

    cursoServiceCall.subscribe({
      next: (curso) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: `Curso ${
            this.cursoSeleccionado ? 'actualizado' : 'creado'
          } correctamente.`,
        });
        this.modulos = curso.modulos || [];
        this.CursoGuardado.emit();
        this.cerrarModal();
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo guardar el curso.',
        });
      },
    });
  }

  get temas(): FormArray {
    return this.formCurso.get('temas') as FormArray;
  }

  agregarTema() {
    this.temas.push(
      this.fb.group({
        nombre: ['', Validators.required],
        descripcion: [''],
      })
    );
  }

  eliminarTema(index: number) {
    this.temas.removeAt(index);
  }

  onDialogHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  cerrarModal() {
    this.formCurso.reset();
    this.modulos = [];
    this.visible = false;
    this.visibleChange.emit(false);
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (data) => {
        this.categorias = data.categorias;
        if (this.categorias.length > 0 && !this.cursoSeleccionado) {
          this.formCurso.patchValue({ categoriaId: this.categorias[0].id });
        }
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

  getInstructores() {
    this.usuarioService.getInstructores().subscribe({
      next: (data: Usuario[]) => {
        this.instructores = data;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudieron cargar los instructores',
        });
      },
    });
  }

  getEstudiantes() {
    this.usuarioService.getEstudiantes().subscribe({
      next: (data) => {
        this.estudiantes = data;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudieron cargar los estudiantes',
        });
      },
    });
  }
}
