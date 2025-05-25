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
import { MessageService } from 'primeng/api';
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
    TablaCursoComponent,
    CommonModule,
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

  /// modal categoria
  visible: boolean = false;

  // utilidades ini
  colores: ColorItem[] = [];
  iconos: IconItem[] = [];
  filteredIcons: any[] = [];

  showPalette = false;
  showIconPalette = false;

  selectedColor = { name: 'Sky', hex: '#3B82F6' };
  selectedIcon = { name: 'Folder', class: 'fa-solid fa-folder' };

  // utilidades fin

  form = signal<FormGroup>({} as FormGroup);

  editId = signal<number | null>(null);
  editando = computed(() => this.editId() !== null);
  formValido = computed(() => this.form().valid);

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private cursoService: CursoService,
    private categoriaService: CategoriaService,
    private utilitiService: UtilitiService
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

  ngOnInit() {
    this.getCursos();
    this.getCategorias();
    this.getcolores();
    this.getIconos();
  }

  get loading() {
    return this.categoriaService.loading();
  }

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

  // utilidades ini
  getcolores() {
    this.utilitiService.getColors().subscribe((data) => {
      this.colores = data;
      // console.log(data);
      
    });
  }

  getIconos() {
    this.utilitiService.getIcons().subscribe((data) => {
      this.iconos = data; 
      
      this.filteredIcons = data;
    });
    console.log("hola");
  }

  togglePalette() {
    this.showPalette = !this.showPalette;
  }

  selectColor(color: any) {
    this.selectedColor = color;
    this.showPalette = false;
  }

  onCustomColorChange(event: Event) {
    const hex = (event.target as HTMLInputElement).value;
    this.selectedColor = { name: 'Custom', hex };
  }

  toggleIconPalette() {
    this.showIconPalette = !this.showIconPalette;
  }

  selectIcon(icon: any) {
    this.selectedIcon = icon;
    this.showIconPalette = false;
  }

  filterIcons(event: Event) {
    const search = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredIcons = this.iconos.filter((icon) =>
      icon.name.toLowerCase().includes(search)
    );
  }
  //  utilidades fin

  // modal de categorias
  modalCategoria() {
    this.visible = true;
  }

  getCursos() {
    this.cursoService.getCursos().subscribe((data) => {
      this.cursos = data;
    });
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((data) => {
      this.categorias = data.categorias;
    });
  }
}
