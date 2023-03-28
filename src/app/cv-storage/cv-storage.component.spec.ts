import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvStorageComponent } from './cv-storage.component';

describe('CvStorageComponent', () => {
  let component: CvStorageComponent;
  let fixture: ComponentFixture<CvStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
