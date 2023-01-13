import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit{
  showPopup =true;
  body = 'login coming soon!'
  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    this.showPopup = false;
  }
}
