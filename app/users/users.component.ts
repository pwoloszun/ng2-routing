import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";
import {User} from "./user";

@Component({
  moduleId: module.id,
  templateUrl: "users.component.html"
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAllUsers().then((users) => {
      this.users = users;
    });
  }

}