import { Component } from '@angular/core';
import { ModalStateService } from '../../services/creacion-listas/servicios/modal-state.service';

@Component({
  selector: 'app-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.css']
})
export class CardBasicComponent {
  constructor(private ms:ModalStateService) {
  }

  showModal(): void {
    this.ms.isVisible = true;
  }
  
}
