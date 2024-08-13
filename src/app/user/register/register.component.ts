import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl(''),
    age: new FormControl(''),
    password: new FormControl(''),
    comfirm_password: new FormControl(''),
    phoneNumber: new FormControl(''),
  })

}
