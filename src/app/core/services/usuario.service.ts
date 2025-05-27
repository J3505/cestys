import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getUser(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  getInstructores(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/instructores`);
  }

  getEstudiantes(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/estudiantes`);
  }

  getAdmins(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/admins`);
  }
}
