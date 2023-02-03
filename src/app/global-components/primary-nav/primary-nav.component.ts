import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})
export class PrimaryNavComponent implements OnInit{
  showMenu = false;
  user?: User;
  constructor(private accountService: AccountService){

  }
  ngOnInit(): void {
   this.accountService.user.subscribe(data=>{
    this.user= data;
   })
  }
  logout(){
    this.accountService.logout();
  }
}
