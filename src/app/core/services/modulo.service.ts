import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Modulo } from '../models/modulo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModuloService {
  private apiUrl = `${environment.apiUrl}/modulo`;

  constructor(private http: HttpClient) {}

  getModulos() {
    return this.http.get<Modulo[]>(`${this.apiUrl}`);
  }
  getModulo(id: string) {
    return this.http.get<Modulo>(`${this.apiUrl}/${id}`);
  }

  crearModulo(modulo: Modulo): Observable<Modulo> {
    return this.http.post<Modulo>(this.apiUrl, modulo);
  }

  actualizarModulo(id: string, modulo: Partial<Modulo>): Observable<Modulo> {
    return this.http.put<Modulo>(`${this.apiUrl}/${id}`, modulo);
  }

  eliminarModulo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
