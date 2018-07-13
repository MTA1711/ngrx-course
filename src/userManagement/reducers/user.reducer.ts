import { User } from '../models/user';
import { Action } from '@ngrx/store';
import { USERS_LIST, USER_ADDED, USER_SELECTED } from '../actions/user.action';

export const userReducer = (state: User[] = [], action)  => {
    switch (action.type) {
        case USERS_LIST:
            return action.payload;
        case USER_ADDED:
            return [...state, action.payload];
        default:
            return state;
    }
};

export const currentUserReducer = (state: User = null, action: any) => {
    switch (action.type) {
        case USER_SELECTED:
            return action.payload;
        default:
            return state;
    }
}
