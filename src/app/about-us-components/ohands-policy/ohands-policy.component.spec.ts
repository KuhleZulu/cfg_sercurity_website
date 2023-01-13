import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhandsPolicyComponent } from './ohands-policy.component';

describe('OhandsPolicyComponent', () => {
  let component: OhandsPolicyComponent;
  let fixture: ComponentFixture<OhandsPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhandsPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OhandsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
