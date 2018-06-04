import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsers = {};

  constructor(private _user: UserService) { }

  ngOnInit() {
  }

  loginUser() {
    this._user.loginUser(this.loginUsers)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
