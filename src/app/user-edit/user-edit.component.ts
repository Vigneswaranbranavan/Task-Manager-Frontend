import id from '@angular/common/locales/id';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup ;
  router: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
  ) {
     // Initializing userForm to avoid TypeScript error
    this.userForm = this.fb.group({
      // id: [''],
      name: [''],
      phoneNumber: [''],
      password: [''],
      email: ['']
    });
  }
  

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    const numericUserId = Number(userId);

    this.userService.getTaskById(numericUserId).subscribe(userData => {
      this.userForm.patchValue({
        id: userData.id,
        name: userData.name,
        phoneNumber: userData.phoneNumber,
        password: userData.password,
        email: userData.email
      });
    });
  }

  onPress() {
    if (this.userForm.valid) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      const user = this.userForm.value
      user.id = id
      this.userService.updateTask(id, user).subscribe(() => {
        alert('User updated successfully!');
        this.router.navigate(['/']);
      });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
  

}
