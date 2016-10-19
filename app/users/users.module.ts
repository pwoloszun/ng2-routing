import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {usersRouting} from './users.routes';
import {UsersComponent} from './users.component';
import {UsersService} from "./users.service";
import {UserDetailsComponent} from "./user-details.component";
import {LogService} from "../shared/log.service";
import {AlwaysCanActivateGuard} from "./always-can-activate.guard";
import {LogDeactivateGuard} from "./log-can-deactivate.guard";

//TODO

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    usersRouting
  ],
  declarations: [
    UsersComponent,
    UserDetailsComponent
    //TODO
  ],
  providers: [
    LogService,
    UsersService,
    AlwaysCanActivateGuard,
    LogDeactivateGuard
    //TODO
  ]
})
export default class UsersModule {
}
