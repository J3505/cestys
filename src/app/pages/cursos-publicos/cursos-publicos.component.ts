import { Component, OnInit } from '@angular/core';
import { NavbarLandingComponent } from '../../layout/landing/navbar-landing/navbar-landing.component';
import { RouterLink } from '@angular/router';
import { Curso } from '../../core/curso';
import { ServicesService } from '../../core/services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarCursoComponent } from "./sidebar-curso/sidebar-curso.component";



@Component({
  selector: 'app-cursos-publicos',
  imports: [NavbarLandingComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './cursos-publicos.component.html',
  styleUrl: './cursos-publicos.component.scss',
})
export default class CursosPublicosComponent implements OnInit {
  cursoCategoria =[
    { label : "Cursos de especialización", cantidad: "10" },
    { label : "Administración y Gestión Empresarial", cantidad: "10" },
    { label : "Contable y Financiera", cantidad: "10" },
    { label : "Tecnología e Informática", cantidad: "10" },
    { label : "Construcción y Topografía", cantidad: "10" },
  ]

  cursosRecientes = [
    { name: "Primeros Auxilios en la Farmacia.", 
      imagen:"https://i.pinimg.com/736x/21/eb/a8/21eba803e015c69a52f310b532a69da8.jpg", 
      alt:"aloja"
    },
    { name: "Atención Farmacéutica al Paciente Crónico.", 
      imagen:"https://i.pinimg.com/736x/21/eb/a8/21eba803e015c69a52f310b532a69da8.jpg", 
      alt:"aloja"
    }
  ]


  paginaActual = 1;
  cursosPorPagina = 5; // Cambiado a 5 para mostrar 7 cursos por página
  paginasTotales = 1;
  cursos: Curso[] = [];
  cursosFiltrados: Curso[] = [];
  cursosPaginados: Curso[] = []; // Nueva propiedad para los cursos de la página actual
  filtroNombre: string = '';
  filtroCategoria: string = '';
  filtroInstructor: string = '';

  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    this.servicesService.obtenerCursos().subscribe((data) => {
      this.cursos = data;
      this.aplicarFiltros(); // Inicializa los filtros y la paginación
    });
  }

  aplicarFiltros(): void {
    const filtrados = this.cursos.filter((curso) => {
      const coincideNombre = curso.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase());
      const coincideCategoria = this.filtroCategoria ? curso.categoria === this.filtroCategoria : true;
      const coincideInstructor = (curso.instructor.nombre + ' ' + curso.instructor.apellido)
        .toLowerCase()
        .includes(this.filtroInstructor.toLowerCase());

      return coincideNombre && coincideCategoria && coincideInstructor;
    });

    this.cursosFiltrados = filtrados; // Almacena la lista completa filtrada
    this.paginasTotales = Math.ceil(filtrados.length / this.cursosPorPagina);
    this.paginaActual = 1; // Reinicia a la primera página solo al aplicar filtros
    this.actualizarCursosPaginados(); // Actualiza los cursos paginados
  }

  actualizarCursosPaginados(): void {
    const inicio = (this.paginaActual - 1) * this.cursosPorPagina;
    const fin = inicio + this.cursosPorPagina;
    this.cursosPaginados = this.cursosFiltrados.slice(inicio, fin); // Usa cursosPaginados en lugar de cursosFiltrados
  }

  cambiarPagina(nuevaPagina: number): void {
    if (nuevaPagina >= 1 && nuevaPagina <= this.paginasTotales) {
      this.paginaActual = nuevaPagina;
      this.actualizarCursosPaginados(); // Actualiza los cursos de la página actual
    }
  }

  limpiarFiltros(): void {
    this.filtroNombre = '';
    this.filtroCategoria = '';
    this.filtroInstructor = '';
    this.aplicarFiltros(); // Vuelve a aplicar los filtros para restaurar la lista completa
  }
}
