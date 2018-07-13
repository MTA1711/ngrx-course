import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: '[app-user-list-item]',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  @Input('app-user-list-item') user: User;

  @Output() select = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  selectUser(event) {
    event.preventDefault();
    this.select.emit(this.user.id);
  }

  deleteUser(event) {
    event.preventDefault();
    this.delete.emit(this.user.id);
  }

}
