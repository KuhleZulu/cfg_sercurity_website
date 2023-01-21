import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/models/news.model';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  newsItem : NewsModel = {
    NewsId: 0,
    Title: '',
    Body: '',
    ImageUrl: 'https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  }

  // ttt= 'sdsdsdsds';

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    
  }

  save(){
    this.newsService.addNews(this.newsItem).subscribe((data) =>{
      if (data){
        alert('News Saved')
      }
    });
  }

}
