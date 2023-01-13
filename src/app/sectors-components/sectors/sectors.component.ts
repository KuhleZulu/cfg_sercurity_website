import { Component, OnInit } from '@angular/core';
import { SectorsModel } from 'src/models/sectors.model';
import { SECTORS_LIST } from 'src/mock-data/sectors';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit{

  sectors_list: SectorsModel[] = SECTORS_LIST;
  body = 'Content will be available soon.'
  showPopup = false;
  constructor() {}

  ngOnInit(): void {}

  readSectors(id: number) {
  this.showPopup = true;
  }
  onClose(){
    this.showPopup = false;
  }
}
