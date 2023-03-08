import { Component } from '@angular/core';
import { USER_TYPES } from 'src/models/constants';
import { initUser, User } from 'src/models/user.model';
import { NewsService } from 'src/services/news.service';
import { UserService } from 'src/services/user.service';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-list-applicants',
  templateUrl: './list-applicants.component.html',
  styleUrls: ['./list-applicants.component.css'],
})
export class ListApplicantsComponent {
  users: User[] = [];
  showAddNews = false;
  showUpdateUser = false;
  allSelected = false;
  search = '';
  user?: User;
  passWordType = 'password'
  // ttt= 'sdsdsdsds';

  constructor(private userService: UserService, private uxService: UxService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      if (data && data.length) {
        this.users = data.filter((x) => x.UserType === USER_TYPES.APPLICANT);
      }
    });
  }
  onImageUploaded(e: string) {
    if (this.user) this.user.Dp = e;
  }
  save() {
    if (!this.user) return;
    this.userService.add(this.user).subscribe((data) => {
      if (data) {
        this.getUsers();
        this.showAddNews = false;
      }
    });
  }
  update() {
    if (!this.user) return;
    this.userService.updateUser(this.user).subscribe((data) => {
      if (data) {
        this.getUsers();
        this.showUpdateUser = false;
      }
    });
  }

  delete() {
    this.userService.deleteUser(0).subscribe((data) => {
      if (data) {
        this.getUsers();
      }
    });
  }
  selectAll() {
    if (this.allSelected) {
      this.users.map((x) => (x.Selected = false));
      this.allSelected = false;
    } else {
      this.users.map((x) => (x.Selected = true));
      this.allSelected = true;
    }
  }

  deleteOne(user: User) {
    this.users.map((x) => (x.Selected = false));
    this.allSelected = false;
    let q = `DELETE FROM news WHERE NewsId = ${user.UserId}`;
    this.uxService.updateUXState({ Loading: true });
    this.userService.query(q).subscribe((data) => {
      this.getUsers();
      this.uxService.updateUXState({
        Toast: {
          Title: 'Careers Deleted',
          Classes: ['_success'],
          Message: 'Bla bla bla bla',
        },
        Loading: false,
      });
    });
  }

  select(news: User) {
    news.Selected = !news.Selected;
  }

  edit(news: User) {
    this.user = news;
    this.showUpdateUser = true;
  }

  initUser(){
    this.user = initUser();
    this.user.UserType = USER_TYPES.APPLICANT;
  }
}
