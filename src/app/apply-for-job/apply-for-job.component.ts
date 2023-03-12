import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from 'src/models/application.model';
import { CareersModel } from 'src/models/careers.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ApplicationService } from 'src/services/application.service';
import { CareersService } from 'src/services/careers.service';

@Component({
  selector: 'app-apply-for-job',
  templateUrl: './apply-for-job.component.html',
  styleUrls: ['./apply-for-job.component.css'],
})
export class ApplyForJobComponent {
  id = 0;
  user?: User;

  career?: CareersModel;
  constructor(
    private route: ActivatedRoute,
    private careersService: CareersService,
    private applicationService: ApplicationService,
    private accountService: AccountService
  ) {
    route.params.subscribe((r) => {
      this.id = Number(r['id']);
      this.getJob();
    });
  }
  ngOnInit() {
    this.accountService.user.subscribe((data) => {
      this.user = data;
    });
  }
  getJob() {
    this.careersService.getOne(this.id).subscribe((data) => {
      if (data) {
        this.career = data;
      }
    });
  }
  saveFile(e: string) {
    if (this.user) {
      this.user.Cv = e;
      this.saveUser();
    }
  }
  saveFileId(e: string) {
    if (this.user) {
      this.user.IdCopy = e;
      this.saveUser();
    }
  }

  save() {
    if (this.user && this.career) {
      const application: Application = {
        ApplicatonId: 0,
        CareerId: this.career?.Career_id,
        CreateById: this.user?.UserId || '',
        Status: 'Submited',
        UserId: this.user?.UserId || '',
      };
      this.applicationService.save(application).subscribe((data) => {
        alert('Application success');
      });
    }
  }

  saveUser() {
    if (this.user) {
      this.accountService.updateUser(this.user).subscribe((data) => {
      
      });
    }
  }
}
