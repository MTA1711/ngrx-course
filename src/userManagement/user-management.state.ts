import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from './models/user';

export const USER_FEATURE = 'usersFeature';

export interface UsersManagementState {
    users: User[];
    currentUser: User;
}

export const selectUserFeature = createFeatureSelector<UsersManagementState>(USER_FEATURE);

export const getUsers = createSelector(
    selectUserFeature,
    (state: UsersManagementState) => state.users
);

export const getCurrentUser = createSelector(
    selectUserFeature,
    (state: UsersManagementState) => state.currentUser
);
