/*
This is one child of user-list, it keeps one user name and one color.
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() user: string;
  @Input() textColor: boolean;

  // Returns a style object of different colors depending on bool input
  getStyle(): Object {
    if (this.textColor) {
      return { "color": "lightgreen" };
    }
    else {
      return { "color": "pink" }
    }
  }
}
