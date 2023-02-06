import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestttttComponent } from './testtttt.component';

describe('TestttttComponent', () => {
  let component: TestttttComponent;
  let fixture: ComponentFixture<TestttttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestttttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestttttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
