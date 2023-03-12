import { Injectable } from '@angular/core';
import { NewsModel } from 'src/models/news.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {


  constructor(private http: HttpClient) { }

  query(query: string): Observable<NewsModel[]>{
    return this.http.get<NewsModel[]>(`https://cfgsecurity.co.za/api/api/query/run.php?Query=${query}`);
  }


}
