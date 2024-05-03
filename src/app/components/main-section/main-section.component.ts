import { Component, Input } from '@angular/core';
import { TopCardComponent } from './top-card/top-card.component';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { RecommendedCardComponent } from './recommended-card/recommended-card.component';
import { LastCarouselCardComponent } from './last-carousel-card/last-carousel-card.component';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [ TopCardComponent, CarouselCardComponent, RecommendedCardComponent, LastCarouselCardComponent ],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  @Input() cardData: object = [];
}
