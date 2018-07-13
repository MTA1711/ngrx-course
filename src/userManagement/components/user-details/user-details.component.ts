import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { UsersManagementState, getCurrentUser } from '../../user-management.state';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User>;
  constructor(private store: Store<UsersManagementState>) {
    this.user$ = this.store.pipe ( select(getCurrentUser) );
  }

  ngOnInit() {
  }

}
