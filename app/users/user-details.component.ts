import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {UsersService} from "./users.service";
import {User} from "./user";

@Component({
  moduleId: module.id,
  selector: 'user-details',
  templateUrl: 'user-details.component.html'
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) {
  }

  ngOnInit() {
    let snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    let id: number = parseInt(snapshot.params["id"]);
    this.usersService.getUser(id).then((user) => {
      this.user = user;
    });
  }

  showUsersList() {
    this.router.navigate(["users"]);
  }

}