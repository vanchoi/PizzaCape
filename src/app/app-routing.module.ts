import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { LoginComponent } from './login/login.component';
import { YoumadeComponent } from './youmade/youmade.component';
import { OurmenuComponent } from './ourmenu/ourmenu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'youmade', component: YoumadeComponent},
  { path: 'ourmenu', component: OurmenuComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component:AboutComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
