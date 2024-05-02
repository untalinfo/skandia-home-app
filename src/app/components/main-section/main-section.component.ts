import { Component } from '@angular/core';
import { TopCardComponent } from './top-card/top-card.component';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [ TopCardComponent ],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

}
