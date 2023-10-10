import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from'rxjs'
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl =  "https://localhost:44352/api/Accounts/"

  constructor(private http: HttpClient) { }

  regestirNewUser(registerdata:any): Observable<any>{
    return this.http.post(this.baseUrl+`register/`,registerdata)
  }
  login(registerdata:any): Observable<any>{
    return this.http.post(this.baseUrl+`login/`,registerdata)
  }
}
