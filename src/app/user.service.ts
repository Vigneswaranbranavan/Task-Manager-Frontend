import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:5029/api/UserItems';


  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get<User[]>(this.url);
  }
  createTask(data: User){
    return this.http.post(this.url, data )
  }

  updateTask(id: number, data: User) {
    return this.http.put(this.url, data )
  }

  getTaskById(id: number){
    return this.http.get<User>(`${this.url}/${id}`);
  }

  deleteTask(userId: number){
    return this.http.delete<void>(`${this.url}/${userId}`);
  }

}

export interface User{
  id:number;
  name:string;
  email:string;
  phoneNumber:string;
  
}

