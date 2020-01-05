import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAddComponent} from './components/user/user-add/user-add.component';
import {UserGetComponent} from './components/user/user-get/user-get.component';
import {UserDetailsComponent} from './components/user/user-details/user-details.component'

const routes: Routes = [{
  path:"user/create",
  component: UserAddComponent
},
{
  path:"users",
  component:UserGetComponent
},
{ 
  path: 'user/:id',      
  component: UserDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
