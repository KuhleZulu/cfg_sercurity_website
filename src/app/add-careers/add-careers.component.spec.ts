import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCareersComponent } from './add-careers.component';

describe('AddCareersComponent', () => {
  let component: AddCareersComponent;
  let fixture: ComponentFixture<AddCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCareersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
