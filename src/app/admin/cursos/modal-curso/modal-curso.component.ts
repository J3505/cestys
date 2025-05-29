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
import { Tema } from '../../../core/models/tema';

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
  // modulos: Modulo[] = [];

  estados = ['Activo', 'Inactivo', 'Proximamente'];

  visibleModalModulo = false;
  moduloSeleccionado: Modulo | null = null;

  value!: string;
  nodes!: any[];
  selectedNodes: any;

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
      modulos: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.getCategorias();
    this.getInstructores();
    this.getEstudiantes();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cursoSeleccionado'] && this.cursoSeleccionado) {
      // Format dates for input[type="date"]
      const formatDate = (date: string | Date | null): string | null => {
        if (!date) return null;
        const d = new Date(date);
        return isNaN(d.getTime()) ? null : d.toISOString().split('T')[0];
      };
      this.formCurso.patchValue({
        nombre: this.cursoSeleccionado.nombre || '',
        descripcion: this.cursoSeleccionado.descripcion || '',
        fechaInicio: formatDate(this.cursoSeleccionado.fechaInicio),
        fechaFin: formatDate(this.cursoSeleccionado.fechaFin),
        horas: this.cursoSeleccionado.horas || 0,
        precio: this.cursoSeleccionado.precio || null,
        descuento: this.cursoSeleccionado.descuento || null,
        imagen: this.cursoSeleccionado.imagen || '',
        categoriaId: Number(this.cursoSeleccionado.categoriaId) || null,
        instructorId: this.cursoSeleccionado.instructorId || '',
        estado: this.cursoSeleccionado.estado || 'Activo',
      });
      this.setModulos(this.cursoSeleccionado.modulos || []);
    }
  }

  getTemas(moduloIndex: number): FormArray {
    return this.modulos.at(moduloIndex).get('temas') as FormArray;
  }

  get modulos(): FormArray {
    return this.formCurso.get('modulos') as FormArray;
  }

  addModulo() {
    this.modulos.push(
      this.fb.group({
        nombre: ['', Validators.required],
        temas: this.fb.array([]),
      })
    );
  }

  addTema(moduloIndex: number) {
    const temas = this.modulos.at(moduloIndex).get('temas') as FormArray;
    temas.push(
      this.fb.group({
        nombre: ['', Validators.required],
      })
    );
    console.log(`Temas for module ${moduloIndex}:`, temas.value);
  }
  removeModulo(index: number) {
    this.modulos.removeAt(index);
  }

  setModulos(modulos: Modulo[]) {
    const moduloFGs = modulos.map((modulo) =>
      this.fb.group({
        id: [modulo.id || null],
        nombre: [modulo.nombre || '', Validators.required],
        temas: this.fb.array(
          (modulo.temas || []).map((tema) =>
            this.fb.group({
              id: [tema.id || null],
              nombre: [tema.nombre || '', Validators.required],
            })
          )
        ),
      })
    );
    const moduloFormArray = this.fb.array(moduloFGs);
    this.formCurso.setControl('modulos', moduloFormArray);
    console.log('Modulos FormArray:', moduloFormArray.value); // Debug
  }

  guardarCurso() {
    if (this.formCurso.invalid) {
      this.logFormErrors();
      this.markAllControlsAsTouched(this.formCurso);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor, completa todos los campos requeridos.',
      });
      return;
    }

    const fechaInicio = this.formCurso.value.fechaInicio
      ? new Date(this.formCurso.value.fechaInicio)
      : null;
    const fechaFin = this.formCurso.value.fechaFin
      ? new Date(this.formCurso.value.fechaFin)
      : null;

    if (fechaInicio && isNaN(fechaInicio.getTime())) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'La fecha de inicio es inválida.',
      });
      return;
    }
    
    if (fechaFin && isNaN(fechaFin.getTime())) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'La fecha de finalización es inválida.',
      });
      return;
    }

    // Get existing modules and topics for comparison (if editing)
    const existingModuleIds = this.cursoSeleccionado
      ? (this.cursoSeleccionado.modulos || [])
          .map((m) => m.id)
          .filter((id) => id)
      : [];
    const existingTopicIdsByModule = this.cursoSeleccionado
      ? (this.cursoSeleccionado.modulos || []).reduce((acc, m) => {
          acc[m.id] = (m.temas || [])
            .map((t) => t.id)
            .filter((id) => id !== undefined);
          return acc;
        }, {} as { [key: number]: number[] })
      : {};

    const cursoData: Curso = {
      ...this.formCurso.value,
      categoriaId: Number(this.formCurso.value.categoriaId),
      fechaInicio: fechaInicio ? fechaInicio.toISOString() : null,
      fechaFin: fechaFin ? fechaFin.toISOString() : null,
      modulos: this.cursoSeleccionado
        ? {
            upsert: this.modulos.value.map((modulo: any, index: number) => ({
              where: modulo.id ,
              create: {
                nombre: modulo.nombre,
                temas: {
                  create: modulo.temas.map((tema: Tema) => ({
                    nombre: tema.nombre,
                  })),
                },
              },
              update: {
                nombre: modulo.nombre,
                temas: {
                  upsert: modulo.temas.map((tema: Tema) => ({
                    where: { id: tema.id || 0 },
                    create: { nombre: tema.nombre },
                    update: { nombre: tema.nombre },
                  })),
                  // Delete topics that were removed
                  delete: (existingTopicIdsByModule[modulo.id] || [])
                    .filter(
                      (id) => !modulo.temas.some((t: Tema) => t.id === id)
                    )
                    .map((id) => ({ id })),
                },
              },
            })),
            delete: existingModuleIds
              .filter((id) => !this.modulos.value.some((m: any) => m.id === id))
              .map((id) => ({ id })),
          }
        : {
            create: this.modulos.value.map((modulo: Modulo) => ({
              nombre: modulo.nombre,
              temas: {
                create: modulo.temas.map((tema: any) => ({
                  nombre: tema.nombre,
                })),
              },
            })),
          },
    };

    console.log('Curso Data to Backend:', JSON.stringify(cursoData, null, 2));

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
        this.CursoGuardado.emit();
        this.cerrarModal();
      },
      error: (err) => {
        console.error('Error completo:', err);
        const errorMessage =
          err.error?.message || err.message || 'Error desconocido';
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `No se pudo guardar el curso: ${errorMessage}`,
        });
      },
    });
  }

  cerrarModal() {
    this.formCurso.reset();
    this.formCurso.setControl('modulos', this.fb.array([]));
    this.visible = false;
    this.visibleChange.emit(false);
  }

  private markAllControlsAsTouched(group: FormGroup | FormArray) {
    Object.values(group.controls).forEach((control) => {
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markAllControlsAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  private logFormErrors() {
    Object.keys(this.formCurso.controls).forEach((key) => {
      const control = this.formCurso.get(key);
      if (control?.invalid) {
        console.log(`Campo ${key} inválido:`, control.errors);
      }
    });
    const modulosArray = this.formCurso.get('modulos') as FormArray;
    modulosArray.controls.forEach((modulo: any, index: number) => {
      if (modulo.invalid) {
        console.log(`Módulo ${index} inválido:`, modulo.errors);
        const temasArray = modulo.get('temas') as FormArray;
        temasArray.controls.forEach((tema: any, temaIndex: number) => {
          if (tema.invalid) {
            console.log(
              `Tema ${temaIndex} del módulo ${index} inválido:`,
              tema.errors
            );
          }
        });
      }
    });
  }

  removeTema(moduloIndex: number, temaIndex: number) {
    const temas = this.modulos.at(moduloIndex).get('temas') as FormArray;
    temas.removeAt(temaIndex);
  }

  onDialogHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (data) => {
        this.categorias = data.categorias.map((cat: Categoria) => ({
          ...cat,
          id: Number(cat.id),
        }));
        console.log('Categorías:', this.categorias);
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
