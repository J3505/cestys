import { Component, OnInit } from '@angular/core';
import { NavbarLandingComponent } from '../../layout/landing/navbar-landing/navbar-landing.component';
import { RouterLink } from '@angular/router';
import { Curso } from '../../core/curso';
import { ServicesService } from '../../core/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos-publicos',
  imports: [NavbarLandingComponent, RouterLink, CommonModule],
  templateUrl: './cursos-publicos.component.html',
  styleUrl: './cursos-publicos.component.scss',
})
export default class CursosPublicosComponent implements OnInit {
  cursos: Curso[] = [];
  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    this.servicesService.obtenerCursos().subscribe((data) => {
      this.cursos = data;
    });
  }
}

