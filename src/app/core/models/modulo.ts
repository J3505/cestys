import { Tema } from "./tema";

export interface Modulo {
  id: string;
  nombre: string;
  temas: { id?: number; nombre: string }[];
}
