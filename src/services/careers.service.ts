import { Injectable } from '@angular/core';
import { CareersModel } from 'src/models/careers.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CareersService {

  constructor(private http: HttpClient) { }

  getAllCareers(): Observable<CareersModel[]>{
    return this.http.get<CareersModel[]>('https://cfgsecurity.co.za/api/api/careers/get-careers.php');
  }
  query(query: string): Observable<CareersModel[]>{
    return this.http.get<CareersModel[]>(`https://cfgsecurity.co.za/api/api/careers/run.php?Query=${query}`);
  }

  getOne(id: number): Observable<CareersModel>{
    return this.http.get<CareersModel>(`https://cfgsecurity.co.za/api/api/careers/get-one.php?Career_id=${id}`);
  }

  addCareers(careersItem: CareersModel) : Observable<CareersModel> {
    return this.http.post<CareersModel>('https://cfgsecurity.co.za/api/api/careers/add-careers.php', careersItem);
  }
  updateCareers(careersItem: CareersModel) : Observable<CareersModel> {
    return this.http.post<CareersModel>('https://cfgsecurity.co.za/api/api/careers/update-careers.php', careersItem);
  }
}
