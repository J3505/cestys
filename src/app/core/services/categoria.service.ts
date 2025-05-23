import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


   private apiUrl = `${environment.apiUrl}/categoria`;

   loading = signal(false);
  categorias = signal<Categoria[]>([]);

  constructor( private http: HttpClient ) { }

  // load() {
  //   this.loading.set(true);
  //   this.http.get<Categoria[]>(this.apiUrl)
  //     .pipe(tap(() => this.loading.set(false)))
  //     .subscribe(data => this.categorias.set(data));
  // }


  //  create(data: Omit<Categoria, 'id'>) {
  //   this.http.post<Categoria>(this.apiUrl, data).subscribe(categoria => {
  //     this.categorias.update(cats => [...cats, categoria]);
  //   });
  // }

  // update(id: number, data: Partial<Categoria>) {
  //   this.http.put<Categoria>(`${this.apiUrl}/${id}`, data).subscribe(updated => {
  //     this.categorias.update(cats =>
  //       cats.map(cat => (cat.id === id ? updated : cat))
  //     );
  //   });
  // }

  // delete(id: number) {
  //   this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
  //     this.categorias.update(cats => cats.filter(cat => cat.id !== id));
  //   });
  // }

  // getCursos(): Observable<Categoria[]> {
  //   return this.http.get<Categoria[]>(this.apiUrl);
  // }

  // Método para obtener categorías (necesario para el formulario)
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(
      `${environment.apiUrl}/categoria`,
      { withCredentials: true }
    );
  }

  // Método para obtener instructores (necesario para el formulario)
  // getInstructores(): Observable<{ id: string; nombre: string; email: string }[]> {
  //   return this.http.get<{ id: string; nombre: string; email: string }[]>(
  //     `${environment.apiUrl}/usuario?rol=Instructor`,
  //     { withCredentials: true }
  //   );
  // }

  // getCurso(id: string): Observable<CategoriaCurso> {
  //   return this.http.get<CategoriaCurso>(`${this.apiUrl}/${id}`);
  // }

  // createCurso(curso: CategoriaCurso): Observable<CategoriaCurso> {
  //   return this.http.post<CategoriaCurso>(this.apiUrl, curso);
  // }

  // updateCurso(id: string, curso: CategoriaCurso): Observable<CategoriaCurso> {
  //   return this.http.put<CategoriaCurso>(`${this.apiUrl}/${id}`, curso);
  // }

  // deleteCurso(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
