import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-modal-categoria',
  imports: [Dialog, ButtonModule, InputTextModule],
  templateUrl: './modal-categoria.component.html',
  styleUrl: './modal-categoria.component.scss'
})
export class ModalCategoriaComponent {
   visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

}
