import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsModel } from 'src/models/news.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<NewsModel[]>{
    return this.http.get<NewsModel[]>('https://dev.tybo.co.za/demo-api/api/news/gets-news.php');
  }
}
