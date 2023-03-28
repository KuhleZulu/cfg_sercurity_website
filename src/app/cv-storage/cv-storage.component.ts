import { Component } from '@angular/core';
import { USER_TYPES } from 'src/models/constants';
// import { USER_TYPES } from 'src/models/constants';
// import { initUser, User } from 'src/models/user.model';
import { Cv_Storage } from 'src/models/cv_storage.model';
import { initUser, User } from 'src/models/user.model';

import { QueryService } from 'src/services/query.service';
import { UserService } from 'src/services/user.service';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-cv-storage',
  templateUrl: './cv-storage.component.html',
  styleUrls: ['./cv-storage.component.css']
})
export class CvStorageComponent {
  cvs: Cv_Storage[] = [];
  cv: Cv_Storage | any;
  search = '';
  showAddUser = false;
  allSelected = false;
  showUpdateUser = false;
  user: User | any;

  constructor(private userService: UserService, private uxService: UxService, private queryService: QueryService) {}

  ngOnInit(): void {
    this.getAllCvs();
  }
  getAllCvs() {
    this.userService.getAllCvs().subscribe((data) => {
      if (data && data.length) {
        this.cvs = data;;
      }
    });
  }

  onCvUpload(e: string) {
    if (this.cv) this.cv.file = e;
  }

  saveFile(e: string) {
    
    if (this.cv?.cvs) {
      this.cv.file = e;
      // this.saveUser();
    }
  }
  saveFileId(e: string) {
    if (this.cv?.cvs) {
      this.cv.file = e;
      // this.saveUser();
    }
  }

  save() {
    if (!this.cv) return; /** CV */
    this.userService.add(this.cv).subscribe((data) => {
      if (data) {
        this.getAllCvs();
        this.showAddUser = false;
      }
    });
  }
  update() {
    if (!this.cv) return;
    this.userService.updateUser(this.cv).subscribe((data) => {
      if (data) {
        this.getAllCvs();
        this.showUpdateUser = false;
      }
    });
  }

  delete() {
    const selected = this.cvs.filter((x) => x.Selected);
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
  getUsers() {
    throw new Error('Method not implemented.');
  }
  selectAll() {
    if (this.allSelected) {
      this.cvs.map((x) => (x.Selected = false));
      this.allSelected = false;
    } else {
      this.cvs.map((x) => (x.Selected = true));
      this.allSelected = true;
    }
  }

  deleteOne(user: User) {
    this.cvs.map((x) => (x.Selected = false));
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
