
export interface Usuario {
  id: string;
  nombre: string;
  apellido?: string;
  avatar?: string;
  email: string;
  telefono?: string;
  rol: 'Admin' | 'Instructor' | 'Estudiante';
}

export interface CategoriaCurso {
  id: number;
  nombre: string;
}

export interface Curso {
  id: string;
  nombre: string;
  descripcion: string;
  fechaInicio: string; // Date en ISO
  fechaFin: string;
  horas: number;
  precio?: number;
  descuento?: number;
  imagen?: string;
  categoriaId: number;
  categoria?: CategoriaCurso;
  estado: 'Activo' | 'Inactivo' | 'Proximamente';
  instructorId: string;
  instructor?: Usuario;
}