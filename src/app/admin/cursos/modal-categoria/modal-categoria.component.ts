import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Categoria } from '../../../core/models/categoria';
import { UtilitiService } from '../../../core/services/utiliti.service';
import { ColorItem } from '../../../core/models/colorItem';
import { IconItem } from '../../../core/models/IconItem';

@Component({
  selector: 'app-modal-categoria',
  imports: [Dialog, ButtonModule, InputTextModule, CommonModule],
  templateUrl: './modal-categoria.component.html',
  styleUrl: './modal-categoria.component.scss',
})
export class ModalCategoriaComponent {
  // visible: boolean = false;

  // showDialog() {
  //   this.visible = true;
  // }

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  // categoria: Categoria = {
  //   nombre: '',
  //   descripcion: '',
  //   color: '#000000',
  //   icono: ''
  // };

  // utilidades ini
  colores: ColorItem[] = [];
  iconos: IconItem[] = [];
  filteredIcons: any[] = [];

  showPalette = false;
  showIconPalette = false;

  selectedColor = { name: 'Sky', hex: '#3B82F6' };
  selectedIcon = { name: 'Folder', class: 'fa-solid fa-folder' };

  // utilidades fin

  constructor(
    private categoriaService: CategoriaService,
    private utilitiService: UtilitiService
  ) {}

  guardarCategoria() {
    // this.categoria.color = this.selectedColor.hex;
    // this.categoria.icono = this.selectedIcon.class;
    // this.categoriaService.crearCategoria(this.categoria).subscribe({
    //   next: () => {
    //     this.visible = false;
    //     // posiblemente emitir evento para recargar lista de categorías
    //   },
    //   error: err => {
    //     console.error('Error al guardar', err);
    //   }
    // });
  }

  togglePalette() {
    this.showPalette = !this.showPalette;
  }

  ngOnInit() {
    this.getcolores();
    this.getIconos();
  }

  selectColor(color: any) {
    this.selectedColor = color;
    this.showPalette = false;
  }

  onCustomColorChange(event: Event) {
    const hex = (event.target as HTMLInputElement).value;
    this.selectedColor = { name: 'Custom', hex };
  }

  toggleIconPalette() {
    this.showIconPalette = !this.showIconPalette;
  }

  selectIcon(icon: any) {
    this.selectedIcon = icon;
    this.showIconPalette = false;
  }

  filterIcons(event: Event) {
    const search = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredIcons = this.iconos.filter((icon) =>
      icon.name.toLowerCase().includes(search)
    );
  }
  //  utilidades fin

  // utilidades ini
  getcolores() {
    this.utilitiService.getColors().subscribe((data) => {
      this.colores = data;
    });
  }

  getIconos() {
    this.utilitiService.getIcons().subscribe((data) => {
      this.iconos = data;      
      this.filteredIcons = data;
    });
  }
}
