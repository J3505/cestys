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
    CommonModule
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

  // formulario ct
  colores = [
    { nombre: 'red', hex: '#EF4444' },
    { nombre: 'orange', hex: '#F97316' },
    { nombre: 'amber', hex: '#F59E0B' },
    { nombre: 'yellow', hex: '#EAB308' },
    { nombre: 'lime', hex: '#84CC16' },
    { nombre: 'green', hex: '#22C55E' },
    { nombre: 'emerald', hex: '#10B981' },
    { nombre: 'teal', hex: '#14B8A6' },
    { nombre: 'cyan', hex: '#06B6D4' },
    { nombre: 'sky', hex: '#0EA5E9' },
    { nombre: 'blue', hex: '#3B82F6' },
    { nombre: 'indigo', hex: '#6366F1' },
    { nombre: 'violet', hex: '#8B5CF6' },
    { nombre: 'purple', hex: '#A855F7' },
    { nombre: 'fuchsia', hex: '#D946EF' },
    { nombre: 'pink', hex: '#EC4899' }
  ];

 

  selectedColor = this.colores[10];
  showPalette = false;


 togglePalette() {
  this.showPalette = !this.showPalette;
}

selectColor(color: { nombre: string; hex: string }) {
  this.selectedColor = color;
  this.showPalette = false;
}

onCustomColorChange(event: any) {
  const hex = event.target.value;
  // Si quieres permitir colores fuera de la paleta
  this.selectedColor = { nombre: 'custom', hex };
}

submit() {
  const body = {
    colorNombre: this.selectedColor.nombre,
    colorHex: this.selectedColor.hex
  };
  console.log('Enviar a la BD:', body);
  // tuServicio.guardarCategoria(body).subscribe(...)
}

toggleIconPalette() {
  this.showPalette = !this.showPalette;
}

iconList = [
  { name: 'Folder', class: 'fa-solid fa-folder' },
  { name: 'Star', class: 'fa-solid fa-star' },
  { name: 'User', class: 'fa-solid fa-user' },
  { name: 'Heart', class: 'fa-solid fa-heart' },
  { name: 'Calendar', class: 'fa-solid fa-calendar' },
  { name: 'Bell', class: 'fa-solid fa-bell' },
  { name: 'File', class: 'fa-solid fa-file' },
  { name: 'Tag', class: 'fa-solid fa-tag' },
  { name: 'Chart', class: 'fa-solid fa-chart-line' },
  { name: 'Wallet', class: 'fa-solid fa-wallet' }
];

filteredIcons = [...this.iconList];
selectedIcon = this.iconList[0]; // por defecto



selectIcon(icon: { name: string; class: string }) {
  this.selectedIcon = icon;
  this.showPalette = false;
}

filterIcons(event: Event) {
  const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  this.filteredIcons = this.iconList.filter(icon =>
    icon.name.toLowerCase().includes(searchTerm)
  );
}


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




    modalCategoria() {
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
      this.categorias = data.categorias;
    });
  }


}
