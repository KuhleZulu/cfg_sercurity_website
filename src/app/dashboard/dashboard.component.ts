import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  showMenu = false;
  user?: User;
  constructor(private accountService: AccountService, private router: Router){

  }
  ngOnInit(): void {
   this.accountService.user.subscribe(data=>{
    this.user= data;
   })
  }
  logout(){
    this.accountService.logout();
  }
  goto(a: string){
    this.router.navigate([a])
  }
}
