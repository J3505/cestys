import { Component } from '@angular/core';


export interface Curso {
  titulo: string;
  duracion: string;
  imagen: string;
  estudiantes: string;
  precio: number;
  precioOriginal: number;
  contenido: string[];
}
@Component({
  selector: 'app-cards-populares',
  imports: [],
  templateUrl: './cards-populares.component.html',
  styleUrl: './cards-populares.component.scss'
})
export class CardsPopularesComponent {
  
  cursos : Curso[]=[
    {
      titulo: 'OFIMÁTICA: Potencia tus Habilidades Digitales',
      duracion: '1 mes',
      precio: 150,
      precioOriginal: 180,
      estudiantes: "15 estudiantes",
      imagen:
        'https://i.pinimg.com/736x/89/b6/23/89b623ee5efc77636097b58632b6cb8b.jpg',
      contenido: [
        'Interfaz de Windows 10.',
        'MS Word 2024.',
        'MS Excel 2024.',
        'MS Power Point 2024.',
        'MS Access 2024.',
        'Herramientas de Internet y Redes Sociales.'
      ]
    },
    {
      titulo: 'AUTOCAD 2D Y 3D: Diseño y Modelado Avanzado',
      duracion: '1 mes',
      imagen: 'https://i.pinimg.com/736x/11/e8/e6/11e8e68479e1e9987667c9f4253e8e4b.jpg',
      estudiantes: "20 estudiantes",
      precio: 150,
      precioOriginal: 1700,
      contenido: [
        'Interfaz AutoCad 2024.',
        'Dibujo de Piezas con Comandos: Líneas / Polilíneas / Círculos / Arcos.',
        'Edición de Objetos: Rotar / Mover / Copiar.',
        'Array / Explode / Mirror / etc.',
        'Configuración de Unidades / Estados de Ayuda Utilitarios de Dibujo / etc.'
      ]
    },
    {
      titulo: 'TOPOGRAFÍA: Fundamentos y Aplicaciones Prácticas',
      duracion: '1 mes',
      imagen: 'https://i.pinimg.com/736x/cb/f6/41/cbf641001e50e436654c21b5c9c5c472.jpg',
      estudiantes: "20 estudiantes",
      precio: 150,
      precioOriginal: 200,
      contenido: [
        'Matemática Aplicada a la Topografía.',
        'Fundamentos y Aplicaciones de la Topografía.',
        'Aplicaciones de Topografía.',
        'Aplicación en Carretera.',
        'Aplicación en Edificaciones.'
      ]
    },
    {
      titulo: 'EDICIÓN Y POSTPRODUCCIÓN DE VIDEOS: Domina el Arte de la Edición.',
      duracion: '1 mes',
      imagen: 'https://i.pinimg.com/736x/c3/bd/3b/c3bd3bffafe3230f4856d8702aaf7f1b.jpg',
      estudiantes: "20 estudiantes",
      precio: 150,
      precioOriginal: 200,
      contenido: [
        'Adobe Premier Pro CC 2024',
        'Adobe After Effects CC 2024',
        'Adobe Audition CC 2024'
      ]
    }
  ]

}
