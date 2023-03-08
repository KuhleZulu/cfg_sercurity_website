import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/user.model';
import { BASE_URL } from 'src/models/constants';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userListBehaviorSubject: BehaviorSubject<User[]>;
  public userListObservable: Observable<User[]>;

  private userBehaviorSubject: BehaviorSubject<User>;
  public userObservable: Observable<User>;
  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.userListBehaviorSubject = new BehaviorSubject<User[]>(JSON.parse(localStorage.getItem('usersList') ||'{}') || []);
    this.userBehaviorSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.userListObservable = this.userListBehaviorSubject.asObservable();
    this.userObservable = this.userBehaviorSubject.asObservable();
    this.url = BASE_URL;
  }

  public get currentUserValue(): User {
    return this.userBehaviorSubject.value;
  }

  updateUserListState(grades: User[]) {
    this.userListBehaviorSubject.next(grades);
    localStorage.setItem('usersList', JSON.stringify(grades));
  }
  updateUserState(user: User) {
    this.userBehaviorSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUsers(companyId: string, userType: string) {
    this.http.get<User[]>(`${this.url}/api/user/get-users.php?CompanyId=${companyId}&UserType=${userType}`).subscribe(data => {
      if (data) {
        this.updateUserListState(data);
      }
    });
  }

  getAllUsers() {
    return this.http.get<User[]>(`${this.url}/user/get-all-users.php`)
  }


  getUser(userId: string) {
    return this.http.get<User>(`${this.url}/user/get-user.php?UserId=${userId}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/user/update-user.php`, user);
  }

  add(user: User) {
    return this.http.post<User>(`${this.url}/user/add-user.php`, user);
  }


  deleteUser(id: number): Observable<User>{
    return this.http.get<User>(`api/user/add-user-company.php?UserId=${id}`);
  }
  query(query: string): Observable<User[]>{
    return this.http.get<User[]>(`https://cfgsecurity.co.za/api/api/careers/run.php?Query=${query}`);
  }

}
