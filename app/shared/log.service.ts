import {Injectable} from "@angular/core";

@Injectable()
export class LogService {
  log(msg) {
    console.log(msg);
  }
}
