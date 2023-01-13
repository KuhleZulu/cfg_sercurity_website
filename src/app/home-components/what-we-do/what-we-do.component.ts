import { Component, OnInit } from '@angular/core';
import { WHAT_WE_DO_LIST } from 'src/mock-data/what_we_do';
import { WhatWeDoModel } from 'src/models/what.we.do.model';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit{

  whatWeDo_list: WhatWeDoModel[] = WHAT_WE_DO_LIST;

  body = 'Content will be available soon.'
  showPopup = false;
  constructor() {}

  ngOnInit(): void {}

  readWhat_we_do(id: number) {
  this.showPopup = true;
  }
  onClose(){
    this.showPopup = false;
  }
}
