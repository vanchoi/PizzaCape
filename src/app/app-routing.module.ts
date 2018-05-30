import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { YoumadeComponent } from './youmade/youmade.component';
import { OurmenuComponent } from './ourmenu/ourmenu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './user/login/login.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'youmade', component: YoumadeComponent},
  { path: 'ourmenu', component: OurmenuComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
