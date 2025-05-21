import { Modulo } from "../curso";
import { Categoria } from "./categoria";
import { Usuario } from "./Usuario";

export interface Curso {
  id: string;
  nombre: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  horas: number;
  precio?: number;
  descuento?: number;
  imagen?: string;
  categoriaId: number;
  categoria: Categoria;
  estado: 'Activo' | 'Inactivo' | 'Proximamente';
  instructorId: string;
  instructor?: Usuario;
  modulos?: Modulo[];
}
