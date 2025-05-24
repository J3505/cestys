import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgClass } from '@angular/common';
import { CursoService } from '../../../core/services/curso.service';
import { Curso } from '../../../core/models/curso';
import { UsuarioService } from '../../../core/services/usuario.service';

import { PaginatorModule, PaginatorState } from 'primeng/paginator';

// Fecha y hora fortmateo
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeEs);
@Component({
  selector: 'app-tabla-curso',
  imports: [
    ConfirmDialog,
    ToastModule,
    ButtonModule,
    NgClass,
    CommonModule,
    PaginatorModule,
    FormsModule
  ],
  templateUrl: './tabla-curso.component.html',
  styleUrl: './tabla-curso.component.scss',

  providers: [
    MessageService,
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'es' },
  ],
})
export class TablaCursoComponent implements OnInit {
  cursos: Curso[] = [];

  // Variables para el filtrado
  cursosFiltrados: Curso[] = [];
  cursosPaginados: Curso[] = [];

  // Paginación
  first: number = 0;
  rows: number = 5;

   // Variables para el filtrado
  filtroNombre: string = '';
  filtroCategoria: string = '';
  filtroInstructor: string = '';

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private cursoService: CursoService,
    private usuarioService: UsuarioService
  ) {}

 ngOnInit() {
    this.getCursos();
    this.getUsuario();
  }

  confirm() {
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Please confirm to proceed moving forward.',
      icon: 'pi pi-exclamation-circle',
      rejectButtonProps: {
        label: 'Cancel',
        icon: 'pi pi-times',
        outlined: true,
        size: 'small',
      },
      acceptButtonProps: {
        label: 'Save',
        icon: 'pi pi-check',
        size: 'small',
      },
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }

 
  // paginación
  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 5;
    this.actualizarCursosPaginados();
  }

  actualizarCursosPaginados() {
    const start = this.first;
    const end = this.first + this.rows;
    this.cursosPaginados = this.cursos.slice(start, end);
  }

  
  getCursos() {
    this.cursoService.getCursos().subscribe((data) => {
      this.cursos = data.map((curso: Curso) => ({
        ...curso,
        fechaInicio: new Date(curso.fechaInicio),
        fechaFin: new Date(curso.fechaFin),
      }));
    this.filtrarCursos();

      console.log(this.cursos);
    });
  }


  filtrarCursos() {
    this.cursosFiltrados = this.cursos.filter((curso) => {
      const coincideNombre = curso.nombre
        .toLowerCase()
        .includes(this.filtroNombre.toLowerCase());
      const coincideInstructor =
        curso.instructor?.nombre
          .toLowerCase()
          .includes(this.filtroInstructor.toLowerCase()) || false;
      const coincideCategoria = this.filtroCategoria
        ? curso.categoriaId === Number(this.filtroCategoria)
        : true;
      return coincideNombre && coincideInstructor && coincideCategoria;
    });
    this.actualizarCursosPaginados();
  }


  getUsuario() {
    this.usuarioService.getUsuarios().subscribe((data) => {
      // console.log(data);
    });
  }
}
