import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';
import { YoumadeComponent } from './youmade/youmade.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurmenuComponent } from './ourmenu/ourmenu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IngredientsComponent } from './youmade/ingredients/ingredients.component';
import { CartComponent } from './cart/cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-list/products-edit/products-edit.component';

import { IngredientsService } from './ingredients.service';

import { ManagmentComponent } from './managment/managment.component';
import { ManagmentIngredientsComponent } from './managment-ingredients/managment-ingredients.component';





@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PaymentinfoComponent,
    YoumadeComponent,
    HomeComponent,
    LoginComponent,
    OurmenuComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    IngredientsComponent,
    CartComponent,
    ProductsListComponent,
    ProductsEditComponent,
    ManagmentComponent,
    ManagmentIngredientsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
