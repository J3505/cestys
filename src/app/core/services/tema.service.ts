import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Tema } from '../../pages/cursos-publicos/interface/tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  private apiUrl = `${environment.apiUrl}/tema`;

  constructor( private http:HttpClient) { }

  getTemas() {
    return this.http.get(this.apiUrl);
  }
  getTema(id: number) {
    return this.http.get<Tema>(`${this.apiUrl}/${id}`);
  }
  createTema(tema: Tema) {
    return this.http.post(this.apiUrl, tema);
  }
  updateTema(id: string, tema: any) {
    return this.http.put(`${this.apiUrl}/${id}`, tema);
  }
  deleteTema(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getTemasByCursoId(cursoId: string) {
    return this.http.get(`${this.apiUrl}/curso/${cursoId}`);
  }
  getTemasByModuloId(moduloId: string) {
    return this.http.get(`${this.apiUrl}/modulo/${moduloId}`);
  }
  getTemasByModuloIdAndCursoId(moduloId: string, cursoId: string) {
    return this.http.get(`${this.apiUrl}/modulo/${moduloId}/curso/${cursoId}`);
  }
  getTemasByModuloIdAndCursoIdAndInstructorId(moduloId: string, cursoId: string, instructorId: string) {
    return this.http.get(`${this.apiUrl}/modulo/${moduloId}/curso/${cursoId}/instructor/${instructorId}`);
  }
}
