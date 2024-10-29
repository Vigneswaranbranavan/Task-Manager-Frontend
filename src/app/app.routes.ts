import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const routes: Routes = [
    {path: '', component:TaskListComponent},
    {path: 'add',component:TaskAddComponent},
    {path: 'edit/:id',component:TaskEditComponent},
    {path: 'userlist',component:UserListComponent},
    {path: 'useredit/:id',component:UserEditComponent}

];
