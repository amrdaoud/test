import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '../app-models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 apiUrl = 'http://angular-course.baservices.net/api/user/';
  constructor(private http:HttpClient) { }
  register(user: RegisterModel): Observable<any> {
    return this.http.post(this.apiUrl+'register',user,{responseType:'text'})
  }
}
