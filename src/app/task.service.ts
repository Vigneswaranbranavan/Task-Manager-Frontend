import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  url = 'http://localhost:5029/api/TaskItems';

  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get<Task[]>(this.url);
  }

  createTask(data: Task){
    return this.http.post(this.url, data )
  }

  updateTask(id: number, data: Task) {
    return this.http.put(this.url, data )
  }

  getTaskById(id: number){
    return this.http.get<Task>(`${this.url}/${id}`);
  }

  deleteTask(taskId: number){
    return this.http.delete<void>(`${this.url}/${taskId}`);
  }

}
export interface Task{
  id : number;
  title : string;
  description : string;
  duedate : string;
  priority : string;
}
