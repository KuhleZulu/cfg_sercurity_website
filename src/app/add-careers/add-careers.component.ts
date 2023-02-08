import { Component, OnInit } from '@angular/core';
import { CareersModel } from 'src/models/careers.model';
import { CareersService } from 'src/services/careers.service';


@Component({
  selector: 'app-add-careers',
  templateUrl: './add-careers.component.html',
  styleUrls: ['./add-careers.component.css']
})
export class AddCareersComponent implements OnInit {

  careers: CareersModel[] = [];

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

  constructor(private careersService: CareersService) {}

  ngOnInit(): void {
    this.getAll();
  }

  save(){
    this.careersService.addCareers(this.careersItem).subscribe((data) =>{
      if (data){
        alert('Careers Saved')
      }
    })
  }
getAll(){
  this.careersService.getAllCareers().subscribe((data) =>{
    if (data){
    this.careers = data;
    }
  })
}

}
