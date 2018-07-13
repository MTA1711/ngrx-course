import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

import { currentUserReducer, userReducer} from './reducers/user.reducer';
import { UserService } from './user.service';
import { UserMiddleware } from './middlewares/user.middleware';
import { USER_FEATURE } from './user-management.state';

export const reducers: ActionReducerMap<any> = {
    users: userReducer,
    currentUser: currentUserReducer
};

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(USER_FEATURE, reducers),
        EffectsModule.forFeature([
            UserMiddleware
        ]),
    ],
    exports: [UserListItemComponent, UserListComponent, UserDetailsComponent],
    declarations: [UserListItemComponent, UserListComponent, UserDetailsComponent],
    providers: [UserService],
})
export class UserManagementModule { }
