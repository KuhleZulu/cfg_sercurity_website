import { Component, OnInit } from '@angular/core';
import { CYBER_SECURITY_SERVICES_LIST } from 'src/mock-data/cyber_security_services';
import { CyberSecurityServicesModel } from 'src/models/cyber.security.services';

@Component({
  selector: 'app-cyber-security-services',
  templateUrl: './cyber-security-services.component.html',
  styleUrls: ['./cyber-security-services.component.css']
})
export class CyberSecurityServicesComponent implements OnInit {

  cyberSecurityServicesList: CyberSecurityServicesModel[] = CYBER_SECURITY_SERVICES_LIST;

  body = 'Content will be available soon.'
  showPopup = false;
  constructor() {}

  ngOnInit(): void {}

  readCyber_Security_Services(id: number) {
  this.showPopup = true;
  }
  onClose(){
    this.showPopup = false;
  }
}
