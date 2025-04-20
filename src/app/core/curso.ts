
import { CategoriaCurso } from "./models/categoria.enum";

export interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  horas: number;
  precio: number;
  imagen: string;
  categoria: CategoriaCurso;
  estado: 'Activo' | 'Inactivo';
  instructor: Instructor;
  modulos: Modulo[];
}

export interface Modulo{
  nombre: string;
  temas:string[]
}

export interface Instructor {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  imagen: string;
}
