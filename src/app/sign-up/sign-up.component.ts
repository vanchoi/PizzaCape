import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  model : User = new User();

  onSubmit(registerForm) {
    debugger;
    
  }

}
