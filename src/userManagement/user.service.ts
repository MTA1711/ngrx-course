import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './models/user';

const BASE_URL =  'http://localhost:3000';

@Injectable()
export class UserService {
    constructor( private http: HttpClient) { }

    fetchUser(): Observable<User[]> {
        return this.http.get<User[]>( `${BASE_URL}/users`);
    }

    fetchUserInfo(userId: number): Observable<User> {
        return this.http.get<User>( `${BASE_URL}/users/${userId}`);
    }

}
