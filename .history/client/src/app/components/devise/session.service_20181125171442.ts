import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  apiEndpoint = 'http://localhost:3000';
  public loginFlag = new EventEmitter();

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    try {
      const response = this.http.post<User>(`${this.apiEndpoint}/users/sign_in`, { user: user } );
      return response['status'];
    } catch (err) {
      return new Observable;
    } finally {

    }

  }
}
