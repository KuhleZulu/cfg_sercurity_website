import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CareersModel } from 'src/models/careers.model';
import { CareersService } from 'src/services/careers.service';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-update-career',
  templateUrl: './update-career.component.html',
  styleUrls: ['./update-career.component.css']
})
export class UpdateCareerComponent {
  @Input() careersItem?: CareersModel;
  @Output() doneEvent = new EventEmitter<CareersModel>();

  constructor(
    private careersService: CareersService,
    private uxService: UxService
  ) {}

  ngOnInit(): void {}
  cancel() {
    this.doneEvent.emit(undefined
      )
  }

  save() {
    if(!this.careersItem) return;
    this.uxService.updateUXState({ Loading: true });
    this.careersService.updateCareers(this.careersItem).subscribe((data) => {
      if (data) {
        this.uxService.updateUXState({
          Toast: {
            Title: 'Careers Saved',
            Classes: ['_success'],
            Message: 'Bla bla bla bla',
          },
          Loading: false
        });
        this.doneEvent.emit(data);
      }
    });
  }
}
