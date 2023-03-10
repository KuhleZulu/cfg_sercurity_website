import { Component } from '@angular/core';
import { USER_TYPES } from 'src/models/constants';
import { initUser, User } from 'src/models/user.model';
import { QueryService } from 'src/services/query.service';
import { UserService } from 'src/services/user.service';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-list-applicants',
  templateUrl: './list-applicants.component.html',
  styleUrls: ['./list-applicants.component.css'],
})
export class ListApplicantsComponent {
  users: User[] = [];
  showAddUser = false;
  showUpdateUser = false;
  allSelected = false;
  search = '';
  user?: User;
  passWordType = 'password';
  // ttt= 'sdsdsdsds';

  constructor(private userService: UserService, private uxService: UxService, private queryService: QueryService) {}

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
        this.showAddUser = false;
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
    const selected = this.users.filter((x) => x.Selected);
    if (selected.length) {
      //const ids = selected.map(x=>x.Career_id);
      let q = 'DELETE FROM user WHERE UserId in (#pl)';
      let id = '';
      selected.forEach((x) => {
        id += `'${x.UserId}'` + ',';
      });
      id = id.substring(0, id.length - 1);
      q = q.replace('#pl', id);

      this.uxService.updateUXState({ Loading: true });
      this.queryService.query(q).subscribe((data) => {
        this.getUsers();
        this.uxService.updateUXState({
          Toast: {
            Title: 'Users Deleted',
            Classes: ['_success'],
            Message: '',
          },
          Loading: false,
        });
      });
    }
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

  select(user: User) {
    user.Selected = !user.Selected;
  }

  edit(user: User) {
    this.user = user;
    this.showUpdateUser = true;
  }

  initUser() {
    this.user = initUser();
    this.user.UserType = USER_TYPES.APPLICANT;
  }
}
