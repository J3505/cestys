export interface Modulo{
  id: string;
  nombre: string;
  temas: Tema[];

}

export interface Tema {
  id: number;
  nombre: string;
}
