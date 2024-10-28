import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TaskListComponent,TaskAddComponent,TaskEditComponent,CommonModule,RouterModule],
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
