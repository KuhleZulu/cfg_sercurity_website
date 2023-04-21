import { Component } from '@angular/core';
import { CareersModel } from 'src/models/careers.model';
import { CareersService } from 'src/services/careers.service';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css'],
})
export class CareerListComponent {
  careers: CareersModel[] = [];
  careersItem?: CareersModel;
  search = '';
  showAddCareer = false;
  showUpdateCareer = true;
  allSelected = false;
  constructor(
    private careersService: CareersService,
    private uxService: UxService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }
  selectAll() {
    if (this.allSelected) {
      this.careers.map((x) => (x.Selected = false));
      this.allSelected = false;
    } else {
      this.careers.map((x) => (x.Selected = true));
      this.allSelected = true;
    }
  }
  getAll() {
    this.uxService.updateUXState({ Loading: true });
    this.careersService.getAllCareers().subscribe((data) => {
      this.uxService.updateUXState({ Loading: false });
      this.careers = data || [];
      if (data) {
        this.careers.map((x) => (x.Selected = false));
      }
    });
  }
  getAllNoLoader() {
    this.careersService.getAllCareers().subscribe((data) => {
      if (data) {
        this.careers = data;
        this.careers.map((x) => (x.Selected = false));
      }
    });
  }
  select(career: CareersModel) {
    career.Selected = !career.Selected;
  }
  doneEvent(c: CareersModel) {
    this.showAddCareer = false;
    this.showUpdateCareer = false;
    this.careersItem = undefined;
    if (c) {
      this.getAll();
    }
  }

  delete() {
    const selected = this.careers.filter((x) => x.Selected);
    if (selected.length) {
      //const ids = selected.map(x=>x.Career_id);
      let q = 'DELETE FROM careers WHERE Career_id in (#pl)';
      let id = '';
      selected.forEach((x) => {
        id += x.Career_id + ',';
      });
      id = id.substring(0, id.length - 1);
      q = q.replace('#pl', id);

      this.uxService.updateUXState({ Loading: true });
      this.careersService.query(q).subscribe((data) => {
        this.getAllNoLoader();
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
  }
  edit(career: CareersModel) {
    this.careersItem = career;
    this.showUpdateCareer = true;
  }
  deleteOne(career: CareersModel) {
    this.careers.map((x) => (x.Selected = false));
    this.allSelected = false;
    let q = `DELETE FROM careers WHERE Career_id = ${career.Career_id}`;
    this.uxService.updateUXState({ Loading: true });
    this.careersService.query(q).subscribe((data) => {
      this.getAllNoLoader();
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
}
