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
  ],
  // FileUpload,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
  providers: [MessageService],
})
export default class CursosComponent implements OnInit {
  // textare
  value!: string;

  cities: City[] | undefined;
  selectedCity: City | undefined;

  visible: boolean = false;

  constructor(
    private messageService: MessageService,
  ) {}


  showDialog() {
    this.visible = true;
  }
  ngOnInit() {
    this.cities = [
      { name: 'Carrera tecnica', code: 'CT' },
      { name: 'Curso de especialidad', code: 'CE' },
    ];
  }



}
