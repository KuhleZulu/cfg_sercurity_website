import { Component, OnInit } from '@angular/core';
import { AFFILIATIONS_LIST } from 'src/mock-data/affiliations';
import { AffiliationsModel } from 'src/models/affiliations.model';

@Component({
  selector: 'app-affiliations',
  templateUrl: './affiliations.component.html',
  styleUrls: ['./affiliations.component.css']
})
export class AffiliationsComponent implements OnInit{

  affiliationsList: AffiliationsModel[] = AFFILIATIONS_LIST;

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
