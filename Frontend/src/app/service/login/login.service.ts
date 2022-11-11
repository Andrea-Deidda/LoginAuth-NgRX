import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http : HttpClient) { }

  LoginURL = 'http://localhost:3000/login'

login (userData: any){
  return this.http.post(this.LoginURL, userData)
}

}
