import { Component, OnInit } from '@angular/core';
import { TechnicalServicesModel } from 'src/models/technical.services';
import { TECHNICAL_SERVICES_LIST } from 'src/mock-data/technical_services';

@Component({
  selector: 'app-technical-services',
  templateUrl: './technical-services.component.html',
  styleUrls: ['./technical-services.component.css']
})
export class TechnicalServicesComponent implements OnInit{

  technicalServicesList: TechnicalServicesModel[] = TECHNICAL_SERVICES_LIST;

  body = 'Content will be available soon.'
  showPopup = false;
  constructor() {}

  ngOnInit(): void {}

  readTechnical_Services(id: number) {
  this.showPopup = true;
  }
  onClose(){
    this.showPopup = false;
  }
}
