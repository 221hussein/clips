import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../service/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent implements OnInit,OnDestroy{

  constructor (public modal : ModalService) {}
  ngOnDestroy(): void {
    this.modal.unregister('auth')
  }

  ngOnInit(): void {
    this.modal.register('auth')      
  }

}
