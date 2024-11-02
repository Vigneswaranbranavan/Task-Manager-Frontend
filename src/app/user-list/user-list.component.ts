import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,RouterModule,ToastrModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  user: any[] = [];

  constructor(private UserService: UserService, private router: Router,private toastr:ToastrService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.UserService.getTask().subscribe((tasks: any[]) => {
      this.user = tasks;
    });
  }

  onDelete(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.UserService.deleteTask(userId).subscribe(() => {
        this.toastr.success('User deleted successfully');
        this.loadTasks();
      });
    }
  }


}
