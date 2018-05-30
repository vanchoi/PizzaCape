import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import { AuthenticationService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submited = false;
  invalidLogin = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) { }

  onSubmit() {
    this.submited = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.controls.email.value === 'ivanov.vanco@gmail.com' && this.loginForm.controls.password.value === 'password') {
      this.router.navigate(['list-user']);
    } else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
// export class LoginComponent {

//   loginForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.createForm();
//   }

//   createForm() {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }
//   // ngOnInit() {
//   //   this.createForm();
//   // }
//   onSubmit() {
//     console.log('form submited');
//     console.log(this.loginForm);
//     // this.loginForm.reset();
// }
// }
