import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsModel } from 'src/models/news.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  getTodos() {
    return this.http.get<NewsModel[]>(
      'https://cfgsecurity.co.za/api/api/news/gets-news.php'
    );
  }
  addNews(news: NewsModel) {
    return this.http.post<NewsModel>(
      'https://cfgsecurity.co.za/api/api/news/add-news.php',
      news
    );
  }
}
