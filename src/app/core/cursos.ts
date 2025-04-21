export interface Cursos {
  id: number;
  nombre: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  horas: number;
  precio: number;
  imagen: string;
  categoria: string;
  estado: string;
  instructorId: number;
  instructorNombre: string;
  instructorApellido: string;
  instructorEmail: string;
  instructorTelefono: string;
  instructorImagen: string;
}
