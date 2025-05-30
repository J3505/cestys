import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CategoriaCurso } from '../../pages/cursos-publicos/interface/curso';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


   private apiUrl = `${environment.apiUrl}/categoria`;

  constructor( private http: HttpClient ) { }

  getCursos(): Observable<CategoriaCurso[]> {
    return this.http.get<CategoriaCurso[]>(this.apiUrl);
  }

  // Método para obtener categorías (necesario para el formulario)
  getCategorias(): Observable<{ id: number; nombre: string }[]> {
    return this.http.get<{ id: number; nombre: string }[]>(
      `${environment.apiUrl}/categoria`,
      // { withCredentials: true }
    );
  }

  // Método para obtener instructores (necesario para el formulario)
  getInstructores(): Observable<{ id: string; nombre: string; email: string }[]> {
    return this.http.get<{ id: string; nombre: string; email: string }[]>(
      `${environment.apiUrl}/usuario?rol=Instructor`,
      { withCredentials: true }
    );
  }

  getCurso(id: string): Observable<CategoriaCurso> {
    return this.http.get<CategoriaCurso>(`${this.apiUrl}/${id}`);
  }

  createCurso(curso: CategoriaCurso): Observable<CategoriaCurso> {
    return this.http.post<CategoriaCurso>(this.apiUrl, curso);
  }

  updateCurso(id: string, curso: CategoriaCurso): Observable<CategoriaCurso> {
    return this.http.put<CategoriaCurso>(`${this.apiUrl}/${id}`, curso);
  }

  deleteCurso(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
