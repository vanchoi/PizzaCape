import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    private registerUrl = 'http://localhost:7000/api/users';
    private loginUrl = 'http://localhost:7000/api/authenticate';

    constructor(private http: HttpClient, private router: Router) {
    }

    registerUser(user) {
        return this.http.post<any>(this.registerUrl, user);
    }
    loginUser(user) {
        return this.http.post<any>(this.loginUrl, user);
    }

    loggedIn() {
        return !!localStorage.getItem('x-access-token');
    }


}
