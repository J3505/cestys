import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Categoria } from '../../../core/models/categoria';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiService } from '../../../core/services/utiliti.service';

@Component({
  selector: 'app-cards',
  imports: [NgClass, RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  form = signal<FormGroup>({} as FormGroup);

  editId = signal<number | null>(null);
  editando = computed(() => this.editId() !== null);
  formValido = computed(() => this.form().valid);

  categorias: Categoria[] = [];

  colorMap: Record<string, { bg: string; text: string }> = {};

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private utilitiService: UtilitiService
  ) {}

  ngOnInit() {
    this.getCategorias();

    this.utilitiService.getColorMap().subscribe((mapa) => {
      this.colorMap = mapa;
    });
  }

  getColorClass(color?: string): { bg: string; text: string } {
    if (!color) {
      return { bg: 'bg-gray-50', text: 'text-gray-600' };
    }

    const colorKey = color.toLowerCase();
    const mapped = this.colorMap[colorKey];

    return {
      bg: mapped?.bg || 'bg-gray-50',
      text: mapped?.text || 'text-gray-600',
    };
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((data) => {
      this.categorias = data.categorias;
    });
  }

  guardar() {
    if (!this.formValido()) return;

    const valores = this.form().value;

    this.cancelar();
  }

  editar(categoria: Categoria) {
    this.form().patchValue(categoria);
    this.editId.set(categoria.id);
  }

  cancelar() {
    this.form().reset();
    this.editId.set(null);
  }
}
