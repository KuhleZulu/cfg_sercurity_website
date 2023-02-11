import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { BASE_URL } from 'src/models/constants';


@Injectable({
  providedIn: 'root'
})
export class AccountService {


  private _user: BehaviorSubject<User>;
  public user: Observable<User>;
  url: string;
  hidePassword = true;
  constructor(
    private http: HttpClient,
    private router: Router) {
      let _user = localStorage.getItem('user');
      let user = undefined;
      if (_user && _user !== 'undefined') {
        user = JSON.parse(_user);
      }
      this._user = new BehaviorSubject<User>(user);
      this.user = this._user.asObservable();
    this.url = BASE_URL;
  }

  public get currentUserValue(): User | undefined {
    return this._user.value;
  }

  updateUserState(user: User) {
    this._user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }



  login(credentials: { email: any; password: any; }): Observable<User> {
    return this.http.post<any>(`${this.url}/account/login.php`, credentials);
  }
  signUp(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/user/add-user.php`, user);
  }
  updateUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/user/update-user.php`, user);
  }

 

  generateAccountActivationReturnLink(token: string) {
    return `${BASE_URL}/#/sign-in?token=${token}`;
  }



  generateForgotPasswordReturnLink(token: string) {
    return `${BASE_URL}/home/reset-password/${token}`;
  }



  logout(e: any =  undefined) {
    this._user.next(e);
    localStorage.clear();
    this.router.navigate(['']);
  }
}
