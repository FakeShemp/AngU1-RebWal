import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    this.userList = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack"]
   }

  ngOnInit() {
  }

  userList: string[];

  getUser($event:string) {
    this.userList.unshift($event);
  }

  popUser() {
    this.userList.pop();
  }
}
