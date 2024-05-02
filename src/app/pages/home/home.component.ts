import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MainSectionComponent } from '../../components/main-section/main-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, MainSectionComponent, FooterComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {

}
