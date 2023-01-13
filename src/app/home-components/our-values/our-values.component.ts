import { Component, OnInit } from '@angular/core';
import { VALUES_LIST } from 'src/mock-data/values';
import { ValuesModel } from 'src/models/our.values.model';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.css']
})
export class OurValuesComponent implements OnInit {

  valuesList: ValuesModel[] = VALUES_LIST;

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
