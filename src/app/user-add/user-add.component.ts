import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,ToastrModule,FormsModule,CommonModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['',[Validators.required]],
      phoneNumber: [''],
      password: [''],
      email: [''],
      // Nested form group(form grp -> form grp)
      address: this.fb.group({
        addressLine1:[''],
        addressLine2:[''],
        city:[''],
        street:['']
       })
    });
  }

  ngOnInit(): void {
   
  }

  onPress() {   
      const user = this.userForm.value;
      console.log(user.address)
      this.userService.createTask(user).subscribe( data => { 
        this.toastr.success('User created successfully!');
        this.router.navigate(['/userlist']);
      })
    
    
  }


}

