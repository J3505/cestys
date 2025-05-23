import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Categoria } from '../../../core/models/categoria';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cards',
  imports: [NgClass,RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export  class CardsComponent {

  form = signal<FormGroup>({} as FormGroup);
 

  editId = signal<number | null>(null);
  editando = computed(() => this.editId() !== null);
  formValido = computed(() => this.form().valid);

//   colorMap: Record<string, { bg: string; text: string }> = {
//     rose: {
//     bg: 'bg-rose-50',
//     text: 'text-rose-600'
//   },
//   amber: {
//     bg: 'bg-amber-50',
//     text: 'text-amber-600'
//   },
//   sky: {
//     bg: 'bg-sky-50',
//     text: 'text-sky-600'
//   },
//   emerald: {
//     bg: 'bg-emerald-50',
//     text: 'text-emerald-600'
//   },
//   violet: {
//     bg: 'bg-violet-50',
//     text: 'text-violet-600'
//   },
//   indigo: {
//     bg: 'bg-indigo-50',
//     text: 'text-indigo-600'
//   },
//   yellow: {
//     bg: 'bg-yellow-50',
//     text: 'text-yellow-600'
//   },
//   fuchsia: {
//     bg: 'bg-fuchsia-50',
//     text: 'text-fuchsia-600'
//   },
//   blue: {
//     bg: 'bg-blue-50',
//     text: 'text-blue-600'
//   },
// };
  
  categorias: Categoria[]=[]

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService 
  ) {

     this.form.set(
      this.fb.group({
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        color: [''],
        icono: [''],
      })
    );
    
    effect(() => {
      console.log('Formulario actualizado', this.form().value);
    });
   }



  ngOnInit(){
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((data) => {      
      this.categorias = data;
    });
  }


  //  get categorias() {
  //   return this.categoriaService.categorias();
  // }

  get loading() {
    return this.categoriaService.loading();
  }

  guardar() {
    if (!this.formValido()) return;

    const valores = this.form().value;

    // if (this.editando()) {
    //   this.categoriaService.update(this.editId()!, valores);
    // } else {
    //   this.categoriaService.create(valores);
    // }

    this.cancelar();
  }

  editar(categoria: Categoria) {
    this.form().patchValue(categoria);
    this.editId.set(categoria.id);
  }

  // eliminar(id: number) {
  //   this.categoriaService.delete(id);
  // }

  cancelar() {
    this.form().reset();
    this.editId.set(null);
  }
}
