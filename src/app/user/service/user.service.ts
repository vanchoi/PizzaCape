import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
    userUrl: string = environment.apiUrl;
    // baseUrl = 'http://localhost:7000/api/users';

    constructor(private http: HttpClient) { }

        // getUsers() {
        //    return this.http.get<User[]>(this.userUrl);
        // }

        getUsers(): Observable<User[]> {
            return this.http.get<User[]>(this.userUrl);
          }
        getUserById(id: number) {
            return this.http.get<User>(this.userUrl + '/' + id);
        }
        createUser(user: User) {
            return this.http.post(this.userUrl, user);
        }
        updateUser(user: User) {
            return this.http.put(this.userUrl + '/' + user.id, user);
        }
        deleteUser(id: number) {
            return this.http.delete(this.userUrl + '/' + id);
        }
}
