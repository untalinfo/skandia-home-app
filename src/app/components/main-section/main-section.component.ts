import { Component, OnInit, } from '@angular/core';
import { TopCardComponent } from './top-card/top-card.component';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { RecommendedCardComponent } from './recommended-card/recommended-card.component';
import { LastCarouselCardComponent } from './last-carousel-card/last-carousel-card.component';
import { AsyncPipe } from '@angular/common';
import { catchError, EMPTY, Observable, pipe } from 'rxjs';
import { cardDataInterface } from '../../../shared/interfaces/data';
import { DataService } from '../../../shared/services/data.service';


@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [ AsyncPipe, TopCardComponent, CarouselCardComponent, RecommendedCardComponent, LastCarouselCardComponent ],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent implements OnInit  {
  showRecommendedSection: boolean = false;
  public cardDataResults$!: Observable<cardDataInterface>
  public errorMessage!: string
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.cardDataResults$ = this.service.fetchData().pipe(catchError((error:string) => {
      this.errorMessage = error;
      return EMPTY;
    }));
  }

  toggleExplore(): void {
    this.showRecommendedSection = !this.showRecommendedSection;
  }
}
