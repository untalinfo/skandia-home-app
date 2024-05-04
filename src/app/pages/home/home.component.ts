import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MainSectionComponent } from '../../components/main-section/main-section.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Observable } from 'rxjs';
import { DataService } from '../../../shared/services/data.service';
import { cardDataInterface } from '../../../shared/interfaces/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, MainSectionComponent, FooterComponent, SidebarComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent{
  isSidebarExpanded: boolean = false;

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  };
}
