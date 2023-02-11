import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  confirmPassword = '';
  hidePassword = true;

 user?: User
  confirmPasswordError?: string;
  emailError?: string;
  passwordError?: string;
  nameError = '';
  phoneNumberError = '';

  constructor(
    private routeTo: Router,
    private accountService: AccountService,
    private uxService: UxService
  ) {}

  ngOnInit() {
    this.accountService.user.subscribe(data=>{
      this.user= data;
     })
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'NumpadEnter' || event.code === 'Enter') {
      this.signUp();
    }
  }

  signUp() {
    if(this.user){
      this.accountService.updateUser(this.user).subscribe(data=>{

      }) 
    }
    
    
  }
}
