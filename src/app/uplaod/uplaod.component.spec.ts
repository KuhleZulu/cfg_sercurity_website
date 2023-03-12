import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplaodComponent } from './uplaod.component';

describe('UplaodComponent', () => {
  let component: UplaodComponent;
  let fixture: ComponentFixture<UplaodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UplaodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UplaodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
