import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/models/news.model';
import { NewsService } from 'src/services/news.service';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  news: NewsModel[] =[];
  showAddNews = false;
  showUpdateNews = false;
  allSelected = false;
  search = '';
  newsItem : NewsModel = {
    NewsId: 0,
    Title: '',
    Body: '',
    CreateById: 'admin',
    Status: 'Active',
    ImageUrl: 'https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  }

  // ttt= 'sdsdsdsds';

  constructor(private newsService: NewsService, private uxService: UxService) {}

  ngOnInit(): void {
    this.getNews();
  }
  getNews(){
    this.newsService.getAllNews().subscribe((data) =>{
      if (data){
       this.news = data;
      }
    });
  }
  onImageUploaded(e:string){
    this.newsItem.ImageUrl = e;
  }
  save(){
    this.newsService.addNews(this.newsItem).subscribe((data) =>{
      if (data){
        this.getNews();
        this.showAddNews = false;
      }
    });
  }
  update(){
    this.newsService.updateNews(this.newsItem).subscribe((data) =>{
      if (data){
        this.getNews();
        this.showUpdateNews = false;
      }
    });
  }

  delete(){
    this.newsService.deleteNews(0).subscribe((data) =>{
      if (data){
        this.getNews();
      }
    });
  }
  selectAll() {
    if (this.allSelected) {
      this.news.map((x) => (x.Selected = false));
      this.allSelected = false;
    } else {
      this.news.map((x) => (x.Selected = true));
      this.allSelected = true;
    }
  }

  deleteOne(news: NewsModel) {
    this.news.map((x) => (x.Selected = false));
    this.allSelected = false;
    let q = `DELETE FROM news WHERE NewsId = ${news.NewsId}`;
    this.uxService.updateUXState({ Loading: true });
    this.newsService.query(q).subscribe((data) => {
      this.getNews();
      this.uxService.updateUXState({
        Toast: {
          Title: 'Careers Deleted',
          Classes: ['_success'],
          Message: 'Bla bla bla bla',
        },
        Loading: false,
      });
    });
  }

  select(news: NewsModel) {
    news.Selected = !news.Selected;
  }

  edit(news: NewsModel) {
    this.newsItem = news;
    this.showUpdateNews= true;
  }
}
