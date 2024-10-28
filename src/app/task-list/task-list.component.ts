import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  searchTerm: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTask().subscribe((tasks: any[]) => {
      this.tasks = tasks;
    });
  }

  onDelete(taskId: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(taskId).subscribe(() => {
        alert('Task deleted successfully');
        this.loadTasks();
      });
    }
  }

  filterTasks() {
    return this.tasks.filter(task => 
      task.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      task.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
