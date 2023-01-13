import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFootPrintComponent } from './our-foot-print.component';

describe('OurFootPrintComponent', () => {
  let component: OurFootPrintComponent;
  let fixture: ComponentFixture<OurFootPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFootPrintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFootPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
