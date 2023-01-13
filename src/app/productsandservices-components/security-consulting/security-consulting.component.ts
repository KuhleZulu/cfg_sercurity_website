import { Component, OnInit } from '@angular/core';
import { SECURITY_CONSULTANCY_LIST } from 'src/mock-data/security_consultancy';
import { SecurityConsultancyModel } from 'src/models/security.consultancy';

@Component({
  selector: 'app-security-consulting',
  templateUrl: './security-consulting.component.html',
  styleUrls: ['./security-consulting.component.css']
})
export class SecurityConsultingComponent implements OnInit {

  securityConsultancyList: SecurityConsultancyModel[] = SECURITY_CONSULTANCY_LIST;

  body = 'Content will be available soon.'
  showPopup = false;
  constructor() {}

  ngOnInit(): void {}

  readSecurity_Consultancy(id: number) {
  this.showPopup = true;
  }
  onClose(){
    this.showPopup = false;
  }
}
