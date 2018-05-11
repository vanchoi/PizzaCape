import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';
import { YoumadeComponent } from './youmade/youmade.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurmenuComponent } from './ourmenu/ourmenu.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentinfoComponent,
    YoumadeComponent,
    HomeComponent,
    LoginComponent,
    OurmenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
