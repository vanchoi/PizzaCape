import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsers = {};

  constructor(private _user: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._user.loginUser(this.loginUsers)
      .subscribe((response) => {
        if (response.token) {
          window.localStorage['x-access-token'] = response.token;
          this.router.navigate(['']);
        }
      } ,
        err => console.log(err)
      );
  }

}
