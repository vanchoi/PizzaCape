import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
  }

  loggedIn() {
    return localStorage.getItem('x-access-token');
}
  logOut() {
    localStorage.removeItem('x-access-token');
    this.router.navigate(['']);
}


}
