import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityConsultingComponent } from './security-consulting.component';

describe('SecurityConsultingComponent', () => {
  let component: SecurityConsultingComponent;
  let fixture: ComponentFixture<SecurityConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityConsultingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
