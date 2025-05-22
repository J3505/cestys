import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Categoria } from '../../../core/models/categoria';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [NgClass,RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export  class CardsComponent implements OnInit{

  
  categorias: Categoria[]=[]
  constructor(
    private categoriaService: CategoriaService 
  ) { }

  ngOnInit(){
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((data) => {      
      this.categorias = data;
    });
  }


}
