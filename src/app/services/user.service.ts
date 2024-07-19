import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, throwError } from 'rxjs';
import { User } from '../inerface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/';
  private firebaseUrl = 'https://console.firebase.google.com/project/user-collection-98825/database/user-collection-98825-default-rtdb/data/~2F';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  //get all method
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status != 200) {
        return EMPTY;
      }
      else {
        return throwError(error);
      }
    }))
  }
  deleteUser(userId: number) {
    return this.http.delete(`${this.apiUrl}/users/` + userId).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status != 200) {
        return EMPTY;
      }
      else {
        return throwError(error);
      }
    }))
  }
  updateUser(userId: number, user: any) {
    return this.http.put(`${this.apiUrl}/users/` + userId, user).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status !== 200) {
        return EMPTY;
      }
      else {
        return throwError(error);
      }
    }))
  }
  createUser(user: any) {
    return this.http.post(`${this.firebaseUrl}/users`, user).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status !== 200) {
        return EMPTY;
      }
      else {
        return throwError(error);
      }
    }))
  }
}
