import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


   private apiUrl = `${environment.apiUrl}/categoria`;

  //  loading = signal(false);
  // categorias = signal<Categoria[]>([]);

  constructor( private http: HttpClient ) { }

  // Método para obtener categorías (necesario para el formulario)
  getCategorias(): Observable<{total: number, categorias: Categoria[]}> {
    return this.http.get<{total: number, categorias: Categoria[]}>(
      `${environment.apiUrl}/categoria`,
      { withCredentials: true }
    );
  }


  getCurso(id: string): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.apiUrl}/${id}`);
  }

  createCurso(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, categoria);
  }

  updateCategoria(id: string, categoria: Categoria): Observable<Categoria> {
    return this.http.patch<Categoria>(`${this.apiUrl}/${id}`, categoria);
  }

  deleteCategoria(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
