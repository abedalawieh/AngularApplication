import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiUrl = environment.apiUrl
  constructor(private http:HttpClient) { }

    getUsers():Observable<any>{
      const response = this.http.get<any>(this.apiUrl)
      return response;
  }

}