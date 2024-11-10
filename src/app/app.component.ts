import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule,ToastrModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'task-manager';

  tasks: any[] = [];

  constructor(private taskservice: TaskService)
  {}
  
  ngOnInit(): void {
    this.taskservice.getTask().subscribe(p => {
      this.tasks = p;
    })
  }
}
