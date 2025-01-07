import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
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
