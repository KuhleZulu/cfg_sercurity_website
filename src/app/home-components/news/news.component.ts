import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NEWS_LIST } from 'src/mock-data/news';
import { NewsModel } from 'src/models/news.model';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  //call a database to get news
  newsList: NewsModel[] = NEWS_LIST;

  constructor(private router: Router, private newsService: NewsService){}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe(data=>{
      // alert('Done');
    })
  }

  readNews(Id: number){
    this.router.navigate(['/news', Id])
  }

}
