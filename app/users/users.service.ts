import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';

import {User} from './user';

@Injectable()
export class UsersService {
  constructor(private http: Http) {
  }

  getAllUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve) => {
      this.getJson((json: User[]) => {
        resolve(json);
      });
    });
  }

  getUser(id: number): Promise<User> {
    return new Promise<User>((resolve) => {
      this.getJson((json: User[]) => {
        let user: User = json.filter((estate: any) => estate.id === id)[0];
        resolve(user);
      });
    });
  }

  private getJson(callback: Function) {
    this.http.get("server/users-data.json").subscribe((response: Response) => {
      callback(response.json());
    });
  }

}
