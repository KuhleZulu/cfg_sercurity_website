import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CareersModel } from 'src/models/careers.model';
import { CareersService } from 'src/services/careers.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit{
  showPopup =true;
  body = 'login coming soon!'

  //Call DB to get Careers
  CareersList: CareersModel[] = [];

  careersItem : CareersModel = {

    Career_id: 0,
    Title: '',
    Posted_by_id: 0,
    Career_type: '',
    Created_date: '',
    Closing_date: '',
    Career_description: '',
    Is_active: '',
    Street_address: '',
    City: '',
    State: '',
    Country: '',
    Zip: ''
  
  }
  
  constructor(private careersService: CareersService, private router: Router) { }

  ngOnInit(): void {
    this.careersService.getAllCareers().subscribe(data =>{
      if (data && data.length){
        this.CareersList = data;
      }
    })
  }

  readCareers(Id:number){
    this.router.navigate(['/read', Id])
  }


  onClose(){
    this.showPopup = false;
  }
}
