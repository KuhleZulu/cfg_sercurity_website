import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsModel } from 'src/models/news.model';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-read-news',
  templateUrl: './read-news.component.html',
  styleUrls: ['./read-news.component.css']
})
export class ReadNewsComponent implements OnInit {
  newId = 0;
  newsItem?: NewsModel;
  constructor(private activedRoute: ActivatedRoute, private newsService: NewsService, private router: Router){
    this.activedRoute.params.subscribe((r) => {
      this.newId = r['id'];
    });
  }


  ngOnInit(): void {
    this.newsService.getOne(this.newId).subscribe(data=>{
      if (data && data){
        this.newsItem = data;
      }
    });
  }

  back(){
    this.router.navigate(['/'])
  }

}
