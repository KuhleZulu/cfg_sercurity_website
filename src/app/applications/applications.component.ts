import { Component } from '@angular/core';
import { Application, initApplication } from 'src/models/application.model';
import { USER_TYPES } from 'src/models/constants';
import { User, initUser } from 'src/models/user.model';
import { ApplicationService } from 'src/services/application.service';
import { QueryService } from 'src/services/query.service';
import { UserService } from 'src/services/user.service';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})
export class ApplicationsComponent {
  applications: Application[] = [];
  showAddUser = false;
  showUpdateUser = false;
  allSelected = false;
  search = '';
  application?: Application;
  passWordType = 'password';
  // ttt= 'sdsdsdsds';

  constructor(
    private userService: UserService,
    private uxService: UxService,
    private queryService: QueryService,
    private applicationService: ApplicationService,
  ) {}

  ngOnInit(): void {
    this.getAllApllications();
  }
  getAllApllications() {
    this.applicationService.getAll().subscribe((data) => {
      if (data && data.length) {
        this.applications = data;
      }
    });
  }

  save() {
    if (!this.application) return;
    this.applicationService.save(this.application).subscribe((data) => {
      if (data) {
        this.getAllApllications();
        this.showAddUser = false;
      }
    });
  }
  update() {
    if (!this.application) return;
    this.applicationService.save(this.application).subscribe((data) => {
      if (data) {
        this.getAllApllications();
        this.showUpdateUser = false;
      }
    });
  }

  delete() {
    const selected = this.applications.filter((x) => x.Selected);
    if (selected.length) {
      //const ids = selected.map(x=>x.Career_id);
      let q = 'DELETE FROM applications WHERE ApplicatonId in (#pl)';
      let id = '';
      selected.forEach((x) => {
        id += `'${x.ApplicatonId}'` + ',';
      });
      id = id.substring(0, id.length - 1);
      q = q.replace('#pl', id);

      this.uxService.updateUXState({ Loading: true });
      this.queryService.query(q).subscribe((data) => {
        this.getAllApllications();
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
      this.applications.map((x) => (x.Selected = false));
      this.allSelected = false;
    } else {
      this.applications.map((x) => (x.Selected = true));
      this.allSelected = true;
    }
  }

  deleteOne(user: User) {
    this.applications.map((x) => (x.Selected = false));
    this.allSelected = false;
    let q = `DELETE FROM news WHERE NewsId = ${user.UserId}`;
    this.uxService.updateUXState({ Loading: true });
    this.userService.query(q).subscribe((data) => {
      this.getAllApllications();
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

  select(user: Application) {
    user.Selected = !user.Selected;
  }

  edit(user: Application) {
    this.application = user;
    this.showUpdateUser = true;
  }

  initUser() {
    this.application = initApplication();
  }
}
