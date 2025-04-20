import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso } from './curso';
import { CURSOS } from './cursos.mock';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  obtenerCursos(): Observable<Curso[]>{
    return of(CURSOS);
  }

  obtenerCursoPorId(id: number): Observable<Curso | undefined> {
    return of(CURSOS.find(curso => curso.id === id));
  }
}
