import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponentComponent {
  registerForm:FormGroup

  constructor(private fb:FormBuilder){
    this.registerForm=this.fb.group({
      fullName:['', [Validators.required]],
      email:['', [Validators.required]],
      Password:['', [Validators.required]],
      confirmPassword:['', [Validators.required]],
      role:['', [Validators.required]],



    })
  }
}
