import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable()
export class UserService {
    private baseUrl = 'http://localhost:7000/api/users';

    constructor(private http: HttpClient) { }

    registerUser(user){
        return this.http.post<any>(this.baseUrl, user)
    }


    // getUsers() {
    //     return this.http.get<User[]>(this.baseUrl);
    // }
    // getUserById(id: number) {
    //     return this.http.get<User>(this.baseUrl + '/' + id);
    // }
    // }
    // updateUser(user: User) {
    //     return this.http.put(this.baseUrl + '/', user);
    // }
    // deleteUser(id: number) {
    //     return this.http.delete(this.baseUrl + '/' + id);
    // }
}