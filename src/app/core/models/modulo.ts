import { Tema } from "./tema";

export interface Modulo {
  id: number;
  nombre: string;
  temas: { id?: number; nombre: string }[];
}
