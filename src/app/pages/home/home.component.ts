import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MainSectionComponent } from '../../components/main-section/main-section.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Subscription } from 'rxjs';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, MainSectionComponent, FooterComponent, SidebarComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit, OnDestroy {
  isSidebarExpanded: boolean = false;

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  };

  data: any; // Aquí almacenaremos los datos de la API
  private subscription!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchData(); // Llamamos al método para realizar la solicitud cuando se inicialice el componente
  }

  fetchData(): void {
    this.subscription = this.dataService.fetchData().subscribe(
      (response) => {
        this.data = [...response?.listCard]; // Guardamos los datos en el estado 'data'
        console.log(this.data, typeof this.data);
      },
      (error) => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Destruimos la suscripción cuando el componente se destruye
    }
  }
}
