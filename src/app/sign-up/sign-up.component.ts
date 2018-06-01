import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user/service/user.service';
import { User } from '../user/model/user.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private service: UserService) {

  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['Vancho Ivanov', Validators.required],
      username: ['Vancho', Validators.required],
      email: ['ivanov.vanco@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required]
    });
  }
  ngOnInit() {
    this.createForm();
  }
  onSubmit() {
    this.service.createUser(this.userForm.value).subscribe(response => {
      console.log(response);
    });
    // tslint:disable-next-line:no-debugger
    // debugger;
    console.log('form submited');
    console.log(this.userForm);
    // this.userForm.reset();
  }
}
