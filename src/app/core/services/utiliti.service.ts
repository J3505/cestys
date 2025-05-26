import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColorItem } from '../models/colorItem';
import { IconItem } from '../models/IconItem';
import { map, Observable } from 'rxjs';

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

  getColorMap(): Observable<Record<string, { bg: string; text: string }>> {
    return this.getColors().pipe(
      map((colores) => {
        const mapColor: Record<string, { bg: string; text: string }> = {};
        for (const color of colores) {
          const name = color.name.toLowerCase();
          const hex = color.hex.toLowerCase();
          mapColor[hex] = {
            bg: `bg-${name}-50`,
            text: `text-${name}-600`
          };
        }
        return mapColor;
      })
    );
  }
}
