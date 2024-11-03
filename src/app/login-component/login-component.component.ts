import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  loginForm:FormGroup

  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      emil:['', [Validators.required]],
      Password:['', [Validators.required]],
    })
  } 

}
