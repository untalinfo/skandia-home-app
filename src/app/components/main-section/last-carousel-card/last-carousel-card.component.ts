import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-last-carousel-card',
  standalone: true,
  imports: [],
  templateUrl: './last-carousel-card.component.html',
  styleUrl: './last-carousel-card.component.scss'
})
export class LastCarouselCardComponent {
  @Output() toggleExplore = new EventEmitter<void>();

  onClick(): void {
    this.toggleExplore.emit();
  }
}
