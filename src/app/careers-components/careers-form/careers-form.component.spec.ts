import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersFormComponent } from './careers-form.component';

describe('CareersFormComponent', () => {
  let component: CareersFormComponent;
  let fixture: ComponentFixture<CareersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
