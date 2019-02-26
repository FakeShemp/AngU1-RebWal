import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BoundText } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() addUserEvent = new EventEmitter<string>();
  @Output() removeUserEvent = new EventEmitter<any>();

  addUser(userName: string) {
    this.addUserEvent.emit(userName);
  }

  removeUser() {
    this.removeUserEvent.emit();
  }
}
