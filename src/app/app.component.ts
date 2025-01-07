import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,CommonModule,RouterModule],
=======
  imports: [RouterOutlet,CommonModule,RouterModule,ToastrModule],
>>>>>>> a764f16bac19d4498162d2786c0fc3bba40259a5
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
