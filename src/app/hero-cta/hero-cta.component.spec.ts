import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCtaComponent } from './hero-cta.component';

describe('HeroCtaComponent', () => {
  let component: HeroCtaComponent;
  let fixture: ComponentFixture<HeroCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
