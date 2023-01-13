import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAndServicesComponent } from './product-and-services.component';

describe('ProductAndServicesComponent', () => {
  let component: ProductAndServicesComponent;
  let fixture: ComponentFixture<ProductAndServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAndServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
