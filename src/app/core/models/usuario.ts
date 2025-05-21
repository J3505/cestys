export interface Usuario {
  id: string;
  nombre: string;
  apellido?: string;
  avatar?: string;
  email: string;
  telefono?: string;
  rol: 'Admin' | 'Instructor' | 'Estudiante';
 }
