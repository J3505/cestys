import { Component, computed, effect, OnInit, signal } from '@angular/core';

import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Select } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { HttpClient, HttpEvent } from '@angular/common/http';
import { CommonModule, NgClass } from '@angular/common';

import { CursoService } from '../../core/services/curso.service';
import { CategoriaService } from '../../core/services/categoria.service';
import { Categoria } from '../../core/models/categoria';
import { Curso } from '../../core/models/curso';



import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalCategoriaComponent } from "./modal-categoria/modal-categoria.component";
import { ModalCursoComponent } from "./modal-curso/modal-curso.component";
import { TablaCursoComponent } from "./tabla-curso/tabla-curso.component";

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
    Dialog,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TextareaModule,
    ToastModule,
    ButtonModule,
    NgClass,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ColorPickerModule,
    ReactiveFormsModule,
    ModalCategoriaComponent,
    ModalCursoComponent,
    TablaCursoComponent
],
  // FileUpload,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
  providers: [MessageService],
})
export default class CursosComponent implements OnInit {
// implements OnInit
  cursos: Curso[] = [];
  // textare
  value!: string;
  categorias: Categoria[] = [];

  cities: City[] | undefined;
  selectedCity: City | undefined;

  visible: boolean = false;



   form = signal<FormGroup>({} as FormGroup);
   
  
    editId = signal<number | null>(null);
    editando = computed(() => this.editId() !== null);
    formValido = computed(() => this.form().valid);

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private cursoService: CursoService,
    private categoriaService: CategoriaService,
  ) {

    this.form.set(
      this.fb.group({
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        color: [''],
        icono: [''],
      })
    );
    
    effect(() => {
      console.log('Formulario actualizado', this.form().value);
    });
   }

  //   get categorias() {
  //   return this.categoriaService.categorias();
  // }

  get loading() {
    return this.categoriaService.loading();
  }

  // guardar() {
  //   if (!this.formValido()) return;

  //   const valores = this.form().value;

  //   if (this.editando()) {
  //     this.categoriaService.update(this.editId()!, valores);
  //   } else {
  //     this.categoriaService.create(valores);
  //   }

  //   this.cancelar();
  // }

  editar(categoria: Categoria) {
    this.form().patchValue(categoria);
    this.editId.set(categoria.id);
  }

  // eliminar(id: number) {
  //   this.categoriaService.delete(id);
  // }

  cancelar() {
    this.form().reset();
    this.editId.set(null);
  }



  showDialog() {
    this.visible = true;
  }

  ngOnInit() {
    this.getCursos();
    this.getCategorias();
  }

  getCursos() {
    this.cursoService.getCursos().subscribe((data) => {
      this.cursos = data;
    });
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((data) => {      
      this.categorias = data;
    });
  }


}
