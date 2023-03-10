import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CareersModel } from 'src/models/careers.model';
import { CareersService } from 'src/services/careers.service';
import { UxService } from 'src/services/ux.service';

@Component({
  selector: 'app-add-careers',
  templateUrl: './add-careers.component.html',
  styleUrls: ['./add-careers.component.css'],
})
export class AddCareersComponent implements OnInit {
  @Output() doneEvent = new EventEmitter<CareersModel>();
  careersItem: CareersModel = {
    Career_id: 0,
    Title: '',
    Posted_by_id: 0,
    Career_type: '',
    Created_date: '',
    Closing_date: '',
    Career_description: '',
    Is_active: '',
    Street_address: '',
    City: '',
    State: '',
    Country: '',
    Zip: '',
  };

  constructor(
    private careersService: CareersService,
    private uxService: UxService
  ) {}

  ngOnInit(): void {}
  cancel() {
    this.doneEvent.emit(undefined);
  }

  save() {
    this.uxService.updateUXState({ Loading: true });
    this.careersService.addCareers(this.careersItem).subscribe((data) => {
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
