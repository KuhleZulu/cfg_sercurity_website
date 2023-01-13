import { Component, OnInit } from '@angular/core';
import { CorporateServicesModel } from 'src/models/corporate.services.model';
import { CORPORATE_SERVICES_LIST } from 'src/mock-data/corporate_services';

@Component({
  selector: 'app-corporate-services',
  templateUrl: './corporate-services.component.html',
  styleUrls: ['./corporate-services.component.css']
})
export class CorporateServicesComponent implements OnInit {
    //call a database to get news
    corporateServicesList: CorporateServicesModel[] = CORPORATE_SERVICES_LIST;

    body = 'Content will be available soon.'
    showPopup = false;
    constructor() {}
  
    ngOnInit(): void {}
  
    readCorporate_Services(id: number) {
    this.showPopup = true;
    }
    onClose(){
      this.showPopup = false;
    }
}
