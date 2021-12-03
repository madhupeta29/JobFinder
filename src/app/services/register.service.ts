import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
   user = new BehaviorSubject<any>('');
  constructor(private http: HttpClient) { 

  }
  registerUser(payload: any): Observable<any>{
    return this.http.post("http://localhost:3000/register", payload)
    .pipe(
      catchError(this.handleError)
    );;
  }
  login(payload: any): Observable<any>{
    return this.http.post("http://localhost:3000/login", payload)
    .pipe(
      catchError(this.handleError)
    );;
  }
  setData(data: any){
    this.user.next(data);

  }
  getData(): Observable<any>{
    return this.user;
  }
  clearData(){
    this.user.next('');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      alert(error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        alert(error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
