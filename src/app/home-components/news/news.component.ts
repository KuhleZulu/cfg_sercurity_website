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
  newsList: NewsModel[] = [];
  body = 'In emeergency.....sample text for body here';

  showPopup = false;

  constructor(private newsService: NewsService, private router: Router){}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe(data=>{
      if (data && data.length){
        this.newsList = data;
      }
    });
  }

  readNews(Id: number){
    this.router.navigate(['/read', Id])
  }

  onClose(){
    this.showPopup = false;
  }

}
