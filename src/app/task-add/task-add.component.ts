import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Task, TaskService } from '../task.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,ToastrModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit {
  tasks:Task[]=[];


  taskForm: FormGroup;
  taskServiceService: any;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private toastr: ToastrService

  ) {
    let today = new Date().toISOString().slice(0,10);
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      dueDate: [today],
      priority: ['Medium']
      // assigneeId: ['']

    });
    router.events.subscribe(e => {console.log(e)});
  }

  ngOnInit(): void {

  }


  onSubmit() {
    let task = this.taskForm.value;
    this.taskService.createTask(task).subscribe(data => {
      this.router.navigate([''])
      this.toastr.success('Task added Succesfully!!')
    })
  }

  close() {
    this.router.navigate([''])
  }
}
