import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { RequestUserListAction, RequestUserDetailsAction, RequestDeleteUserAction } from '../../actions/user.action';
import { UsersManagementState, getUsers } from '../../user-management.state';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;

  constructor( private store: Store<UsersManagementState> ) {
    this.users = this.store.pipe ( select(getUsers) );
   }

  ngOnInit() {
    this.store.dispatch(new RequestUserListAction());
  }

  selectUser(event: number) {
    this.store.dispatch(new RequestUserDetailsAction(event));
  }

  deleteUser(event) {
    this.store.dispatch(new RequestDeleteUserAction(event));
  }
}
