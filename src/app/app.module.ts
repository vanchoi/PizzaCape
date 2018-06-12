// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

// Components
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';
import { YoumadeComponent } from './youmade/youmade.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IngredientsComponent } from './youmade/ingredients/ingredients.component';
import { CartComponent } from './cart/cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-list/products-edit/products-edit.component';
import { ManagmentComponent } from './managment/managment.component';
import { ManagmentIngredientsComponent } from './managment-ingredients/managment-ingredients.component';
import { PizzasComponent } from './home/pizzas/pizzas.component';
import { ManagmentUsersComponent } from './managment-users/managment-users.component';
import { MenagmentOrdersComponent } from './menagment-orders/menagment-orders.component';


// Services
import { IngredientsService } from './ingredients.service';
import { UserService } from './user/user.service';
import { PizzaService } from './home/pizzas/pizza.service';
import { ManageIngredientsService } from './managment-ingredients/manage-ingredients.service';
import { UserGuard } from './user/user.guard';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';





@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PaymentinfoComponent,
    YoumadeComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    IngredientsComponent,
    CartComponent,
    ProductsListComponent,
    ProductsEditComponent,
    ManagmentComponent,
    ManagmentIngredientsComponent,
    PizzasComponent,
    ManagmentUsersComponent,
    NavbarAdminComponent,
    MenagmentOrdersComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    IngredientsService,
    UserService,
    PizzaService,
    ManageIngredientsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
