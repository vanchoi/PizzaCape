import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model = {};

  constructor(private _user: UserService) {

   }

  ngOnInit() {
  }

  // model : User = new User();

  onSubmit(registerForm) {
    // debugger;
  }

  registerUser() {
    this._user.registerUser(this.model)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
