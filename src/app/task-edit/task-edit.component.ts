import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  TaskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // let today = new Date().toISOString().slice(0,10);
    this.TaskForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dueDate: [ '' , [Validators.required]],
      priority: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      const numericTaskId = Number(taskId); // Convert string to number
      this.taskService.getTaskById(numericTaskId).subscribe(task => {
        let today = new Date().toISOString().slice(0,10);
          this.TaskForm.patchValue({
            id: task.id,
            title: task.title,
            description: task.description,
            today: task.duedate,
            priority: task.priority,
          });

      });
    }
  }

  onPress() {
    if (this.TaskForm.valid) {
      const id = Number(this.TaskForm.get('id')?.value);
      this.taskService.updateTask(id, this.TaskForm.value).subscribe(() => {
       alert('Task updated successfully');
        this.router.navigate(['/']);
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
