import { Injectable } from '@angular/core';
import { NewsModel } from 'src/models/news.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private http: HttpClient) { }

  getAllNews(): Observable<NewsModel[]>{
    return this.http.get<NewsModel[]>('https://cfgsecurity.co.za/api/api/news/gets-news.php');
  }

  getTop6News(): Observable<NewsModel[]>{
    return this.http.get<NewsModel[]>('https://cfgsecurity.co.za/api/api/news/get-top6-news.php');
  }

  getOne(id: number): Observable<NewsModel>{
    return this.http.get<NewsModel>(`https://cfgsecurity.co.za/api/api/news/get-one.php?NewsId=${id}`);
  }
  deleteNews(id: number): Observable<NewsModel>{
    return this.http.get<NewsModel>(`https://cfgsecurity.co.za/api/api/news/delete-news.php?NewsId=${id}`);
  }

  addNews(newsItem: NewsModel) : Observable<NewsModel> {
    return this.http.post<NewsModel>('https://cfgsecurity.co.za/api/api/news/add-news.php', newsItem);
  }

  updateNews(newsItem: NewsModel) : Observable<NewsModel> {
    return this.http.post<NewsModel>('https://cfgsecurity.co.za/api/api/news/update-news.php', newsItem);
  }
  query(query: string): Observable<NewsModel[]>{
    return this.http.get<NewsModel[]>(`https://cfgsecurity.co.za/api/api/careers/run.php?Query=${query}`);
  }


}
