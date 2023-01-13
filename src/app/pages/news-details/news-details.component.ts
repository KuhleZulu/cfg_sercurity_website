import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEWS_LIST } from 'src/mock-data/news';
import { NewsModel } from 'src/models/news.model';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {
  id: number = 0;
  news?: NewsModel;

  constructor(private route: ActivatedRoute){
    route.params.subscribe(r => { 
      this.id = Number(r['id']) 
      this.getNews()

    })
  }

  getNews(){
    this.news = NEWS_LIST.find(x=>x.Id===this.id)
    
  }
}
