import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';

import {UserDetailsComponent} from "./user-details.component";
import {LogService} from "../shared/log.service";

@Injectable()
export class LogDeactivateGuard implements CanDeactivate<UserDetailsComponent> {

  constructor(private logger: LogService) {
  }

  canDeactivate(target: UserDetailsComponent) {
    this.logger.log(`Left UserDetails at ${new Date()}`);
    return true;
  }
}