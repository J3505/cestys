import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../../pages/cursos-publicos/interface/curso';



@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiUrl = `${environment.apiUrl}/curso`;

  constructor( private http: HttpClient ) { }

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }


  getCurso(id: string): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/${id}`);
  }

  // Método para obtener instructores (necesario para el formulario)
  getInstructores(): Observable<{ id: string; nombre: string; email: string }[]> {
    return this.http.get<{ id: string; nombre: string; email: string }[]>(
      `${environment.apiUrl}/usuario?rol=Instructor`,
      { withCredentials: true }
    );
  }


  createCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }

  updateCurso(id: string, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/${id}`, curso);
  }

  deleteCurso(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
