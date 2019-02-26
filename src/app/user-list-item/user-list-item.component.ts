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

  getStyle(): Object {
    if (this.textColor) {
      return { "color": "lightgreen" };
    }
    else {
      return { "color": "pink" }
    }
  }
}
