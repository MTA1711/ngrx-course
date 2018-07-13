import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const REQUEST_USERS_LIST = 'REQUEST_USERS_LIST';
export const REQUEST_USER_DETAILS = 'REQUEST_USER_DETAILS';
export const REQUEST_ADD_USER = 'REQUEST_ADD_USER';
export const REQUEST_DELETE_USER = 'REQUEST_DELETE_USER';

export const USERS_LIST = 'USERS_LIST';
export const USER_DETAILS = 'USER_DETAILS';
export const USER_ADDED = 'USER_ADDED';
export const USER_SELECTED = 'USER_SELECTED';

// #commands systems Action
export class RequestUserListAction implements Action {
    readonly type = REQUEST_USERS_LIST;
}

export class RequestUserDetailsAction implements Action {
    readonly type = REQUEST_USER_DETAILS;
    constructor(public payload: number) {}
}

export class RequestAddUserAction implements Action {
    readonly type = REQUEST_ADD_USER;
    constructor(public payload: User) {}
}

export class RequestDeleteUserAction implements Action {
    readonly type = REQUEST_DELETE_USER;
    constructor(public payload: number) {}
}

// #Documents systems Action
export class UserListAction implements Action {
    readonly type = USERS_LIST;
    constructor(public payload: User[]) {}
}

export class UserDetailsAction implements Action {
    readonly type = USER_DETAILS;
    constructor(public payload: User) {}
}

export class UserAddedAction implements Action {
    readonly type = USER_ADDED;
    constructor(public payload: User) {}
}

export class UserSelectedAction implements Action {
    readonly type = USER_SELECTED;
    constructor(public payload: User) {}
}