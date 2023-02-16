import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  confirmPassword = '';
  hidePassword = true;

  newUser: User = {
    UserId: '',
    CompanyId: '',
    UserType: 'Applicant',
    Name: '',
    Surname: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    Dp: '',
    AddressLineHome: '',
    AddressUrlHome: '',
    AddressLineWork: '',
    AddressUrlWork: '',
    CreateUserId: '',
    ModifyUserId: '',
    StatusId: '1',
    IdentityNumber: '',
    dateofbirth: '',
    gender: '',
    currentlyemployed: '',
    salaryexpected: '',
    Experience: '',
    Certificates: '',
    MaritalStatus: '',
    WillingToRelocate: '',
    HighestQualification: ''
  };
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

  ngOnInit() {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'NumpadEnter' || event.code === 'Enter') {
      this.signUp();
    }
  }
  validate(name = ''): boolean {
    let isFormValid = true;
    if(name === 'Name'){
      this.nameError = '';
      if (!this.newUser.Name) {
        this.nameError = 'Please enter your name';
        isFormValid = false;
      }
      return isFormValid;
    }

    if(name === 'PhoneNumber'){
      this.phoneNumberError = '';
      if (!this.newUser.PhoneNumber) {
        this.phoneNumberError = 'Please enter your phone number';
        isFormValid = false;
      }
      return isFormValid;
    }
    this.confirmPasswordError = '';
    this.emailError = '';
    this.passwordError = '';
    this.nameError = '';
    this.phoneNumberError = '';
    if (!this.newUser.Name) {
      this.nameError = 'Please enter your name';
      isFormValid = false;
    }
    if (!this.newUser.PhoneNumber) {
      this.phoneNumberError = 'Please enter your phone number';
      isFormValid = false;
    }
    if (!this.newUser.Email) {
      this.emailError = 'Please enter your email';
      isFormValid = false;
    }

    if (!this.newUser.Password) {
      this.passwordError = 'Please enter your password';
      isFormValid = false;
    }

    if (this.newUser.Password !== this.confirmPassword) {
      this.confirmPasswordError = 'Passwords muct match';
      isFormValid = false;
    }
    return isFormValid;
  }
  signUp() {
    if (this.validate()) {
     this.accountService.signUp(this.newUser).subscribe(data=>{

     }) 
    }
  }
}
