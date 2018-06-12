import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { YoumadeComponent } from './youmade/youmade.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ManagmentComponent } from './managment/managment.component';
import { ManagmentIngredientsComponent } from './managment-ingredients/managment-ingredients.component';
import { UserGuard } from './user/user.guard';
import { ManagmentUsersComponent } from './managment-users/managment-users.component';
import { AdminGuard } from './managment/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'custom', component: YoumadeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent, canActivate: [UserGuard] },
  { path: 'managment-users', component: ManagmentUsersComponent },
  { path: 'admin', component: ManagmentComponent, canActivate: [AdminGuard] },
  { path: 'managment-ingredients', component: ManagmentIngredientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
