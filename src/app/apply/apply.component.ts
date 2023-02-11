import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CareersModel } from 'src/models/careers.model';
import { CareersService } from 'src/services/careers.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  id = 0
  career?: CareersModel;
  constructor(private route: ActivatedRoute, private careersService: CareersService){
    route.params.subscribe(r => { 
      this.id = Number(r['id']) 
     this.get();
    })
  }

  get(){
    this.careersService.getOne(this.id).subscribe(data=>{
      if(data){
        this.career = data;
      }
    })
  }
}
