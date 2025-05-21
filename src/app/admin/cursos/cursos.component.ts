import { Component, OnInit } from '@angular/core';

import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { HttpClient, HttpEvent } from '@angular/common/http';
import { CommonModule, NgClass } from '@angular/common';
import { Curso } from '../../pages/cursos-publicos/interface/curso';
import { CursoService } from '../../core/services/curso.service';
import { CategoriaService } from '../../core/services/categoria.service';
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
    Select,
    NgClass
  ],
  // FileUpload,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
  providers: [MessageService],
})
export default class CursosComponent implements OnInit {

  categoriasx = [
  { id: 1, nombre: 'Programación', cursos: 45, color: 'blue', icono: 'fa-code' },
  { id: 2, nombre: 'Diseño', cursos: 28, color: 'pink', icono: 'fa-paint-brush' },
  { id: 3, nombre: 'Data Science', cursos: 15, color: 'purple', icono: 'fa-database' },
  { id: 4, nombre: 'Negocios', cursos: 22, color: 'green', icono: 'fa-chart-line' },
  { id: 5, nombre: 'Marketing', cursos: 32, color: 'orange', icono: 'fa-bullhorn' }
];

  // textare
  value!: string;
  cursos: Curso[] = [];
  categorias: { id: number; nombre: string }[] = [];

  cities: City[] | undefined;
  selectedCity: City | undefined;

  visible: boolean = false;

  constructor(
    private messageService: MessageService,
    private cursoService: CursoService,
    private categoriaService: CategoriaService,
  ) {}



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
