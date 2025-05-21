import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Modulo } from '../models/modulo';


@Injectable({
  providedIn: 'root'
})
export class ModuloService {
  private apiUrl = `${environment.apiUrl}/modulo`;

  constructor( private http: HttpClient) { }

  getModulos() {
    return this.http.get<Modulo[]>(`${this.apiUrl}`);
  }
  getModulo(id: string) {
    return this.http.get<Modulo>(`${this.apiUrl}/${id}`);
  }

}
