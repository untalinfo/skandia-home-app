import { Component, Input } from '@angular/core';
import { dataInterface } from '../../../../shared/interfaces/data';
import { formatNumberWithDots } from '../../../../shared/helpers/jsFunctions';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss'
})
export class CarouselCardComponent {
  isSelectedCard: boolean = false;
  @Input() cardInfo!: dataInterface;

  toggleCheckCard(): void {
    this.isSelectedCard = !this.isSelectedCard;
  }

  constructor() { }

  formatNumber(numberString: string): string {
    return formatNumberWithDots(numberString);
  }
}
