
import { Categoria } from "./categoria";
import { Modulo } from "./modulo";
import { Usuario } from "./usuario";


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
