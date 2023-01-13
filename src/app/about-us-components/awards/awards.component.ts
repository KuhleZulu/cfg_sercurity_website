import { Component } from '@angular/core';
import { AwardsModel } from 'src/models/awards';
import { AWARDS_LIST } from 'src/mock-data/awards';


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {

  awardsList: AwardsModel[] = AWARDS_LIST;

  body = 'Content will be available soon.'
  showPopup = false;
  constructor() {}

  ngOnInit(): void {}

  readValues(id: number) {
  this.showPopup = true;
  }
  onClose(){
    this.showPopup = false;
  }
}
