import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCarouselCardComponent } from './last-carousel-card.component';

describe('LastCarouselCardComponent', () => {
  let component: LastCarouselCardComponent;
  let fixture: ComponentFixture<LastCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastCarouselCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
