
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { Action } from '@ngrx/store';

import { RequestUserListAction, REQUEST_USERS_LIST, UserListAction,
         RequestUserDetailsAction, REQUEST_USER_DETAILS, UserSelectedAction } from '../actions/user.action';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { HttpErrorAction } from '../../core/default.action';


@Injectable()
export class UserMiddleware {
    constructor(private actions$: Actions,
                private userService: UserService) { }

    @Effect()
    getUserList: Observable<Action> = this.actions$
        .ofType<RequestUserListAction>(REQUEST_USERS_LIST).pipe(
            switchMap( () => this.userService.fetchUser()),
            map( (users: User[])  => new UserListAction(users)),
            catchError( (err: any) => of(new HttpErrorAction(err)) )
        );

    @Effect()
    getUserData: Observable<Action> = this.actions$
        .ofType<RequestUserDetailsAction>(REQUEST_USER_DETAILS).pipe(
            switchMap( (action: RequestUserDetailsAction) => this.userService.fetchUserInfo(action.payload)),
            map( (user: User)  => new UserSelectedAction(user)),
            catchError( (err: any) => of(new HttpErrorAction(err)) )
        );
}
//catchError( (err: any) => Observable.of (new HttpErrorAction(err) ) )