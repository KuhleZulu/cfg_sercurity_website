import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input()  newsId = 0;
@Input()  title = 'Hey';
@Input()  image = 'assets/images/image6.jpg';
@Input()  button = 'READ MORE';
@Output() btnEvent = new EventEmitter<number>();

  constructor(){}
  ngOnInit(): void{}

  btnClick(){
    //alert('test')
    this.btnEvent.emit(this.newsId)
  }

}
