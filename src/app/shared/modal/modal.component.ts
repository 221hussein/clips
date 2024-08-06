import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  // providers: [ModalService]
})
export class ModalComponent implements OnInit {

  constructor(public modal : ModalService) {

  }

  ngOnInit(): void {
      
  }

  closeModal() {
    this.modal.toggleModal()
  }
}
