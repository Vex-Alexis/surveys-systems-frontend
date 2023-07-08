import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backendUrl } from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public registerUser(user: any){
    return this.httpClient.post(`${backendUrl}/users`, user);
  }

  public getUser(){}

  public updateUser(){}

  public deleteUser(){}




}
