import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';
import { YoumadeComponent } from './youmade/youmade.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './user/service/auth.service';
import { LoginComponent } from './user/login/login.component';
import { OurmenuComponent } from './ourmenu/ourmenu.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UserService } from './user/service/user.service';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PaymentinfoComponent,
    YoumadeComponent,
    HomeComponent,
    LoginComponent,
    OurmenuComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
