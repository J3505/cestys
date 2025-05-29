import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../core/services/categoria.service';
import { MessageService } from 'primeng/api';
import { Categoria } from '../../../core/models/categoria';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-landing',
  imports: [ RouterLink],
  templateUrl: './footer-landing.component.html',
  styleUrl: './footer-landing.component.scss',
  providers: [MessageService],
})
export class FooterLandingComponent implements OnInit {
  correo: string = 'cestys@gmail.com';
  telefono: string = '904436204';
   categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (data) => {
        this.categorias = data.categorias;
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


}
