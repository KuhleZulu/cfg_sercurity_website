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
    return this.http.get<NewsModel[]>('https://cfgsecurity.co.za/api/api/news/gets-news.php');
  }

  addNews(newsItem: NewsModel) : Observable<NewsModel> {
    return this.http.post<NewsModel>('https://cfgsecurity.co.za/api/api/news/add-news.php', newsItem);
  }
}
