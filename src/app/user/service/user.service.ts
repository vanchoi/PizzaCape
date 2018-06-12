import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
    userUrl: string = environment.registerUrl;

    constructor(private http: HttpClient) { }

    createUser(user: User) {
        return this.http.post<any>(this.userUrl, user);
    }

    // getUsers(): Observable < User[] > {
    //     return this.http.get<User[]>(this.userUrl);
    // }

    // getUserById(id: number) {
    //     return this.http.get<User>(this.userUrl + '/' + id);
    // }

    // updateUser(user: User) {
    //     return this.http.put(this.userUrl + '/' + user.id, user);
    // }

    // deleteUser(id: number) {
    //     return this.http.delete(this.userUrl + '/' + id);
    // }

    checkUser(user: User) {

    }
}
