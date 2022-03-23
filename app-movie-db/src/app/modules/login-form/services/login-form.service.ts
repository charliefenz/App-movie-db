import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserLoginInfo } from '../models/user-login-info';
import { UsersResponse } from '../models/users-response';

@Injectable()
export class LoginFormService {

  mockUrl = 'assets/mocks/users.json';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UsersResponse> {
    return this.httpClient.get<UsersResponse>(this.mockUrl);
  }
  
  async login(userInfo: UserLoginInfo): Promise<boolean> {
    let usersResponse = await this.getUsers().toPromise();
    let userFound: User | undefined;
    let response = false;

    userFound = usersResponse.users.find(user => user.email === userInfo.email && user.password === userInfo.password)

    if (userFound) {
      return response = true;
    } else {
      return response;
    }
  }
}
