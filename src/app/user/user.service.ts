import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    this.loadingSubject.next(true); // Set loading state to true
    return this.http.get<any>(this.apiUrl);
  }

  getUser(id: number): Observable<any> {
    this.loadingSubject.next(true); // Set loading state to true
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
