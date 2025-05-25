import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColorItem } from '../models/colorItem';
import { IconItem } from '../models/IconItem';

@Injectable({
  providedIn: 'root',
})
export class UtilitiService {
  private color = 'color-list.json';
  private icono = 'icon-list.json';

  constructor(private http: HttpClient) {}

  getColors() {
    return this.http.get<ColorItem[]>(this.color);
  }

  getIcons() {
    return this.http.get<IconItem[]>(this.icono);
  }
}
