import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/models/news.model';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  ttt= 'sdsdsdsds';

  constructor() {}

  ngOnInit(): void {
    
  }

  save(){
    // alert(this.ttt)
  }

}
