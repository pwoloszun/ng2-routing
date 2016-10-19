import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class AlwaysCanActivateGuard implements CanActivate {
  canActivate() {
    return true;
  }
}