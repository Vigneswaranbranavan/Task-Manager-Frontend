import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
<<<<<<< HEAD
import { SideBarComponent } from './sidebar/side-bar/side-bar.component';
=======
import { authGuard } from './auth.guard';
>>>>>>> a764f16bac19d4498162d2786c0fc3bba40259a5


export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: RegisterComponentComponent },
    { path: 'login', component: LoginComponentComponent },


    {

        path: 'admin' , component:SideBarComponent,
        // canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'tasklist', pathMatch: 'full' }, // Default child route
            { path: 'tasklist', component: TaskListComponent },
            { path: 'add', component: TaskAddComponent },
            { path: 'edit/:id', component: TaskEditComponent },
            { path: 'userlist', component: UserListComponent },
            { path: 'useredit/:id', component: UserEditComponent },
            { path: 'useradd', component: UserAddComponent },
        ]




    },

<<<<<<< HEAD
    { path: '**', redirectTo: 'login' },
];
=======
    {
        path: 'admin',
        canActivate:[authGuard],
        children: [
            {path: '', component:TaskListComponent},
            {path: 'add',component:TaskAddComponent},
            {path: 'edit/:id',component:TaskEditComponent},
            {path: 'userlist',component:UserListComponent},
            {path: 'useredit/:id',component:UserEditComponent},
            {path: 'useradd', component:UserAddComponent},
        ]


    }

];















// export const routes: Routes = [
//     {path: '', component:TaskListComponent},
//     {path: 'add',component:TaskAddComponent},
//     {path: 'edit/:id',component:TaskEditComponent},
//     {path: 'userlist',component:UserListComponent},
//     {path: 'useredit/:id',component:UserEditComponent},
//     {path: 'useradd', component:UserAddComponent},
//     {path: 'register',component:RegisterComponentComponent},
//     {path: 'login',component:LoginComponentComponent}

// ];
>>>>>>> a764f16bac19d4498162d2786c0fc3bba40259a5
