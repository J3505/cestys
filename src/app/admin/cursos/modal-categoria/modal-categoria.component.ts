import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Categoria } from '../../../core/models/categoria';
import { UtilitiService } from '../../../core/services/utiliti.service';
import { ColorItem } from '../../../core/models/colorItem';
import { IconItem } from '../../../core/models/IconItem';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modal-categoria',
  imports: [
    Dialog,
    ButtonModule,
    InputTextModule,
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  templateUrl: './modal-categoria.component.html',
  styleUrl: './modal-categoria.component.scss',
  providers: [MessageService],
})
export class ModalCategoriaComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() categoriaGuardada = new EventEmitter<void>();

  colores: ColorItem[] = [];
  iconos: IconItem[] = [];
  filteredIcons: IconItem[] = [];

  showPalette = false;
  showIconPalette = false;

  selectedColor = { name: 'Sky', hex: '#3B82F6' };
  selectedIcon = { name: 'Folder', class: 'fa-solid fa-folder' };

  // utilidades fin
  formCategoria: FormGroup;
  @Input() categoriaSeleccionada: Categoria | null = null;

  constructor(
    private categoriaService: CategoriaService,
    private utilitiService: UtilitiService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.formCategoria = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      color: ['', Validators.required],
      icono: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoriaSeleccionada'] && this.categoriaSeleccionada) {
      this.formCategoria.patchValue({
        nombre: this.categoriaSeleccionada.nombre || '',
        descripcion: this.categoriaSeleccionada.descripcion || '',
        color: this.categoriaSeleccionada.color || '#3B82F6',
        icono: this.categoriaSeleccionada.icono || 'fa-solid fa-folder',
      });
      this.selectedColor = {
        name: this.categoriaSeleccionada.nombre || 'Preloaded',
        hex: this.categoriaSeleccionada.color || '#3B82F6',
      };
      this.selectedIcon = {
        name: this.categoriaSeleccionada.nombre || 'Preloaded',
        class: this.categoriaSeleccionada.icono || 'fa-solid fa-folder',
      };
    } else if (!this.categoriaSeleccionada) {
      this.formCategoria.reset();
      this.selectedColor = { name: 'Sky', hex: '#3B82F6' };
      this.selectedIcon = { name: 'Folder', class: 'fa-solid fa-folder' };
      this.formCategoria.patchValue({
        color: this.selectedColor.hex,
        icono: this.selectedIcon.class,
      });
    }
  }

  // abrir modalcatetegoria comunicacion
  onDialogHide() {
    this.visible = false;
    this.visibleChange.emit(false);
    this.formCategoria.reset();
    this.selectedColor = { name: 'Sky', hex: '#3B82F6' };
    this.selectedIcon = { name: 'Folder', class: 'fa-solid fa-folder' };
  }

  togglePalette() {
    this.showPalette = !this.showPalette;
    this.showIconPalette = false;
  }

  ngOnInit() {
    this.getcolores();
    this.getIconos();
  }

  selectColor(color: ColorItem) {
    this.selectedColor = color;
    this.formCategoria.patchValue({ color: color.hex });
    this.showPalette = false;
  }

  onCustomColorChange(event: Event) {
    const hex = (event.target as HTMLInputElement).value;
    this.selectedColor = { name: 'Custom', hex };
    this.formCategoria.patchValue({ color: hex });
  }

  toggleIconPalette() {
    this.showIconPalette = !this.showIconPalette;
    this.showPalette = false;
  }

  selectIcon(icon: IconItem) {
    this.selectedIcon = icon;
    this.formCategoria.patchValue({ icono: icon.class });
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

  guardarCategoria() {
    if (this.formCategoria.invalid) {
      this.formCategoria.markAllAsTouched();
      return;
    }

    const categoria: Categoria = {
      id: this.categoriaSeleccionada?.id || 0,
      nombre: this.formCategoria.value.nombre,
      descripcion: this.formCategoria.value.descripcion,
      color: this.formCategoria.value.color,
      icono: this.formCategoria.value.icono,
      _count: this.categoriaSeleccionada?._count || { cursos: 0 },
    };

    const action = this.categoriaSeleccionada
      ? this.categoriaService.updateCategoria(categoria.id, categoria)
      : this.categoriaService.createCategoria(categoria);

    action.subscribe({
      next: () => {
        this.visible = false;
        this.visibleChange.emit(false);
        this.categoriaGuardada.emit();
        this.formCategoria.reset();
        this.selectedColor = { name: 'Sky', hex: '#3B82F6' };
        this.selectedIcon = { name: 'Folder', class: 'fa-solid fa-folder' };
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Categoría guardada correctamente',
        });
      },
      error: (err) => {
        console.error('Error al guardar', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo guardar la categoría',
        });
      },
    });
  }

  cerrarModal() {
    this.visible = false;
    this.visibleChange.emit(false);
    this.formCategoria.reset();
    this.selectedColor = { name: 'Sky', hex: '#3B82F6' };
    this.selectedIcon = { name: 'Folder', class: 'fa-solid fa-folder' };
  }
}
