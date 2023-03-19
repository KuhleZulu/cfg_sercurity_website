import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  title = '';
  message = 'Our team will contact as soon as possible with next steps';
  career?: CareersModel;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private careersService: CareersService,
    private applicationService: ApplicationService,
    private accountService: AccountService
  ) {
    route.params.subscribe((r) => {
      this.id = Number(r['id']);
    });
  }
  ngOnInit() {
    this.accountService.user.subscribe((data) => {
      this.user = data;
      if (this.user && this.user.UserType === 'Applicant') {
        this.getJob();
      } else {
        this.router.navigate([`/sign-up`], {
          queryParams: { backTo: `/apply-for-job/${this.id}` },
        });
      }
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
      this.user.AddressLineWork = e;
      this.saveUser();
    }
  }
  saveFileId(e: string) {
    if (this.user) {
      this.user.AddressLineHome = e;
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
        this.title = 'Thank you for applying for this position';
      });
    }
  }

  saveUser() {
    if (this.user) {
      this.accountService.updateUser(this.user).subscribe((data) => {
        this.accountService.updateUserState(data);
      });
    }
  }
  ok() {
    this.title = '';
            this.router.navigate(['/applicant'])

  }
}
