import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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

  @Input() name = '';

  addUser(userName: string) {
    this.addUserEvent.emit(this.name);
    this.name = '';
  }

  removeUser() {
    this.removeUserEvent.emit();
  }
}
