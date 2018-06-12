import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/service/user.service';
import { Router } from '@angular/router';
import { User } from '../user/model/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {
  user: User;

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }


  createForm() {
    this.registerForm = this.fb.group({
      name: ['Vancho Ivanov', Validators.required],
      username: ['Vancho', Validators.required],
      email: ['ivanov.vanco@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required]
    });
  }

  ngOnInit() {
    this.createForm();
  }

  public onSubmit() {

    if (this.registerForm.valid) {
      this.userService.createUser(this.registerForm.value).subscribe();
      console.log(this.registerForm.value);
      /* Any API call logic via services goes here */

    // this.userService.createUser(registerForm).subscribe();
    // this.userService.createUser(this.registerForm.value).subscribe();

    // console.log('form submited');
    // console.log(this.registerForm.value);
    // this.router.navigate(['/login']);
  }
}
}
