import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersFormPageComponent } from './careers-form-page.component';

describe('CareersFormPageComponent', () => {
  let component: CareersFormPageComponent;
  let fixture: ComponentFixture<CareersFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
