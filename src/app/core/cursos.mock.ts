
import { Curso } from './curso';
import { CategoriaCurso } from './models/categoria.enum';

export const CURSOS: Curso [] = [
  {
    id: 1,
    nombre: 'Secretariado Ejecutivo',
    descripcion: 'Carrera técnica enfocada en habilidades administrativas y de oficina.',
    fechaInicio: new Date('2025-05-01'),
    fechaFin: new Date('2026-05-01'),
    horas: 480,
    precio: 1200,
    imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745129247/descarga_cqtwkw.jpg',
    categoria: CategoriaCurso.CarreraTecnica,
    estado: 'Activo',
    instructor: {
      id: 1,
      nombre: 'Ana',
      apellido: 'Gómez',
      email: 'ana.gomez@cestys.edu.pe',
      telefono: '987654321',
      imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745129247/descarga_cqtwkw.jpg'
    },
    modulos: [
      {
        nombre: 'Módulo I',
        temas: ['Ofimática', 'Documentación Mercantil', 'Contabilidad Comercial', 'Digitación']
      },
      {
        nombre: 'Módulo II',
        temas: ['Legislación Laboral', 'Marketing Secretarial', 'Técnica Secretarial', 'Etiqueta Secretarial', 'Atención y Servicio al Cliente']
      },
      {
        nombre: 'Módulo III',
        temas: ['Mecanografía', 'Ortografía', 'Redacción General', 'Trámite Documentario', 'Organización de Oficinas', 'Oratoria y Liderazgo', 'Taquigrafía']
      }
    ]
  },
  {
    id: 2,
    nombre: 'AutoCAD 2D - 3D 2024',
    descripcion: 'Curso de especialización en diseño asistido por computadora 2D y 3D.',
    fechaInicio: new Date('2025-06-01'),
    fechaFin: new Date('2025-08-01'),
    horas: 90,
    precio: 650,
    imagen: 'https://i.pinimg.com/736x/11/e8/e6/11e8e68479e1e9987667c9f4253e8e4b.jpg',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 2,
      nombre: 'Carlos',
      apellido: 'Quispe',
      email: 'carlos.quispe@cestys.edu.pe',
      telefono: '912345678',
      imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745129247/descarga_cqtwkw.jpg'
    },
    modulos: [
      {
        nombre: 'Inicial',
        temas: [
          'Interfaz AutoCad 2024',
          'Dibujo de Piezas con Comandos: Líneas / Polilíneas / Círculos / Arcos',
          'Edición de Objetos: Rotar / Mover / Copiar',
          'Array / Explode / Mirror / etc',
          'Configuración de Unidades / Estados de Ayuda Utilitarios de Dibujo / etc'
        ]
      },
      {
        nombre: 'Intermedio',
        temas: [
          'Trazo de Planos: Layer / Capas, Multilíneas, Acotación',
          'Bloques / Bloques Dinámicos',
          'Textos para Complementar Planos',
          'Ploteo de Impresión (Model / Layout)'
        ]
      },
      {
        nombre: 'Avanzado',
        temas: [
          'Entorno de trabajo en 3D',
          'Construcción de Objetos en 3D'
        ]
      }
    ]
  }
];
