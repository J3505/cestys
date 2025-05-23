import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { NodeService } from '../../../core/models/NodeService';

import { TreeSelect } from 'primeng/treeselect';

import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-curso',
  imports: [Dialog, ButtonModule, InputTextModule, FormsModule, TreeSelect, TextareaModule],
templateUrl: './modal-curso.component.html',
  styleUrl: './modal-curso.component.scss',
  providers: [NodeService] 

})
export class ModalCursoComponent {

  value!: string;

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

  nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }

}
