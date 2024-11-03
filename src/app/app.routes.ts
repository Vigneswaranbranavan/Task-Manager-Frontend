import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';


export const routes: Routes = [
    {path: '', component:TaskListComponent},
    {path: 'add',component:TaskAddComponent},
    {path: 'edit/:id',component:TaskEditComponent},
    {path: 'userlist',component:UserListComponent},
    {path: 'useredit/:id',component:UserEditComponent},
    {path: 'useradd', component:UserAddComponent},
    {path: 'register',component:RegisterComponentComponent},
    {path: 'login',component:LoginComponentComponent}

];
