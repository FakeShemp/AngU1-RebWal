/*
This component keeps track of the list of childs (user-list-items) and also takes 
care of the button for toggling color.
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() users: string[];
  toggle = false;

  // Toggle a boolean to signal color changes in child
  toggleColor() {
    this.toggle = !this.toggle;
  }
}
