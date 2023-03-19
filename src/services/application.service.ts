import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Application } from 'src/models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Application[]>{
    return this.http.get<Application[]>('https://cfgsecurity.co.za/api/api/application/gets-applications.php');
  }

  getByApplicant(userId: string): Observable<Application[]>{
    return this.http.get<Application[]>(`https://cfgsecurity.co.za/api/api/application/gets-applications-by-userId.php.php?UserId=${userId}`);
  }

  getOne(id: number): Observable<Application>{
    return this.http.get<Application>(`https://cfgsecurity.co.za/api/api/application/get-one.php?ApplicationId=${id}`);
  }

  save(item: Application) : Observable<Application> {
    item.ApplicatonId = Number(item.ApplicatonId)
    return this.http.post<Application>('https://cfgsecurity.co.za/api/api/application/save.php', item);
  }

}
