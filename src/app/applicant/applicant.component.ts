import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {
  user?:User;
  constructor(private accountService: AccountService, private router: Router){
    this.accountService.user.subscribe(data=>{
      this.user= data;
     })
  }
  editProfile(){
    this.router.navigate(['/update-user'])
  }
  apply(){
    alert('Navigate to jobs')
  }
}
