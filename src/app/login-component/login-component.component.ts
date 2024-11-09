import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  loginForm:FormGroup

  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      name:['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)]],
      Password:['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)]]
    });
  }


  ngOnInit(): void {
    
  }
  
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
    } else {
      console.log('Form is invalid', this.loginForm.value);
      this.loginForm.markAllAsTouched();
    }



}

}
