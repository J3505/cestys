import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Modulo } from '../../../core/models/modulo';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Categoria } from '../../../core/models/categoria';
import { TextareaModule } from 'primeng/textarea';
import { ModuloService } from '../../../core/services/modulo.service';

@Component({
  selector: 'app-modal-modulo',
  imports: [
    Dialog,
    ButtonModule,
    InputTextModule,
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    TextareaModule,
  ],
  templateUrl: './modal-modulo.component.html',
  styleUrl: './modal-modulo.component.scss',
  providers: [MessageService],
})
export class ModalModuloComponent implements OnInit {
  categorias: Categoria[] = [];

  // Inputs para el modal
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() modalGuardada = new EventEmitter<void>();

  @Input() moduloSeleccionado: Modulo | null = null;
  @Input() cursoId: string | null = null; // ID del curso al que pertenece el módulo
  @Output() moduloGuardado = new EventEmitter<Modulo>();

  // Variables para el formulario
  formModulo: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private categoriaService: CategoriaService,
    private moduloService: ModuloService
  ) {
    this.formModulo = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
    });
  }

  ngOnInit() {
    if (this.moduloSeleccionado) {
      this.formModulo.patchValue({
        nombre: this.moduloSeleccionado.nombre,
        descripcion: this.moduloSeleccionado.temas,
      });
    }
  }

  guardarModulo() {
    if (this.formModulo.invalid) {
      this.formModulo.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor, completa todos los campos requeridos.',
      });
      return;
    }

    const moduloData: Modulo = {
      ...this.formModulo.value,
      cursoId: this.cursoId,
      id: this.moduloSeleccionado?.id,
    };

    const moduloServiceCall = this.moduloSeleccionado
      ? this.moduloService.actualizarModulo(
          this.moduloSeleccionado.id!,
          moduloData
        )
      : this.moduloService.crearModulo(moduloData);

    moduloServiceCall.subscribe({
      next: (modulo) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: `Módulo ${
            this.moduloSeleccionado ? 'actualizado' : 'creado'
          } correctamente.`,
        });
        this.moduloGuardado.emit(modulo);
        this.cerrarModal();
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo guardar el módulo.',
        });
      },
    });
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((data) => {
      this.categorias = data.categorias;
    });
  }

  onDialogHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  cerrarModal() {
    this.formModulo.reset();
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
