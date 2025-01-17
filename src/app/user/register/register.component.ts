import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    name = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ])
    email = new FormControl('',[
      Validators.required,
      Validators.email
    ])
    age = new FormControl('',[
      Validators.required,
      Validators.min(18),
      Validators.max(120)
    ])
    password = new FormControl('',[
      Validators.required,
      // Validators.pattern(`/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm`)
    ])
    comfirm_password = new FormControl('',[
      Validators.required
    ])
    phoneNumber = new FormControl('')

    registerForm = new FormGroup({
     name: this.name,
     email: this.email,
     age: this.age,
     password: this.password,
     confirm_password: this.comfirm_password,
     phoneNumber : this.phoneNumber 
    })

    showAlert = false 
    alertMsg = 'Please Wait Your account is being created.'
    alertColor = 'blue'

    register() {
       this.showAlert = true
       this.alertMsg  = 'Please Wait Your account is being created.'
       this.alertColor = 'blue'
      }

}
