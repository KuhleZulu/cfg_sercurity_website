import { Component } from '@angular/core';
import { NewsModel } from 'src/models/news.model';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-testtttt',
  templateUrl: './testtttt.component.html',
  styleUrls: ['./testtttt.component.css'],
})
export class TestttttComponent {
  news: any[] = [];
  user = {
    Name: 'John',
  };

  testNews: NewsModel = {
    NewsId: 0,
    Body: '',
    CreateById: 'me',
    ImageUrl:
      'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
    Status: 'Active',
    Title: 'Doloo',
  };
  constructor(private todoService: TodoService) {
    // Get news
    this.getNewDotiManje();
  }

  onAdd() {
    this.todoService.addNews(this.testNews).subscribe((data) => {
      this.getNewDotiManje();
    });
  }

  getNewDotiManje() {
    this.todoService.getTodos().subscribe((data) => {
      this.news = data;
    });
  }
}
