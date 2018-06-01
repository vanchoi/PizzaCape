import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser = {}

  constructor(private _user: UserService) { }

  ngOnInit() {
  }

  logUser(){
    console.log(this.loginUser)
  }

}
