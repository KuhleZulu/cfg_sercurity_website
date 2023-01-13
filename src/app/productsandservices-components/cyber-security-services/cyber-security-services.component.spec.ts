import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecurityServicesComponent } from './cyber-security-services.component';

describe('CyberSecurityServicesComponent', () => {
  let component: CyberSecurityServicesComponent;
  let fixture: ComponentFixture<CyberSecurityServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberSecurityServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberSecurityServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
