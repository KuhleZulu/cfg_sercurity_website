import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/services/account.service';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  hidePassword = true;
  error = '';

  constructor(
    private routeTo: Router,
    private accountService: AccountService,
    private uxService: UxService
  ) {}

  ngOnInit() {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'NumpadEnter' || event.code === 'Enter') {
      this.login();
    }
  }
  login() {
    this.error = '';
    if (!this.email) {
      this.error = 'Please enter your username.';
      return;
    }
    if (!this.password) {
      this.error = 'Please enter your password.';
      return;
    }
    this.uxService.updateUXState({
      Loading: true,
    });
    this.accountService
      .login({ email: this.email, password: this.password })
      .subscribe((user) => {
        if (user && user.UserId) {
          this.error = '';
          this.accountService.updateUserState(user);
          this.uxService.updateUXState({
            Loading: false,
            Toast: {
              Title: 'Success',
              Message: `You are logged in`,
              Classes: ['_success'],
            },
          });
          if ('Admin' === user.UserType) this.routeTo.navigate(['/dashboard']);
          if ('Applicant' === user.UserType) this.routeTo.navigate(['/applicant']);
        } else {
          let err: any = user;
          this.error = 'Username or password is incorrect';
          this.uxService.updateUXState({
            Loading: false,
            Toast: {
              Title: 'Incorrect login details',
              Message: `We couldn't log you in. please try again`,
              Classes: ['_error'],
            },
          });
        }
      });
  }
}
