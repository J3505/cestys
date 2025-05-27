import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tema } from '../../../core/models/tema';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-modal-tema',
  imports: [
    Dialog,
    ButtonModule,
    InputTextModule,
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  templateUrl: './modal-tema.component.html',
  styleUrl: './modal-tema.component.scss',
  providers: [MessageService],
})
export class ModalTemaComponent {
   // Inputs para el modal
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  // @Output() modalGuardada = new EventEmitter<void>();



  // Variables para el formulario
  //  formModulo: FormGroup;
  @Input() temaSeleccionado: Tema | null = null;

  constructor(
     private fb: FormBuilder,
    private messageService: MessageService,

  ){

  }

   onDialogHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  cerrarModal() {
    this.visible = false;
    this.visibleChange.emit(false);
  }


}
