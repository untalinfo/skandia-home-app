import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent { 
  @Input() expanded= false;
  sidebarItems = [
    {
      iconUrl: '../../../assets/images/homeIcon.png',
      text: 'Inicio',
    },
    {
      iconUrl: '../../../assets/images/hojaIcon.png',
      text: 'Contrato',
    },
    {
      iconUrl: '../../../assets/images/ToolIcon.png',
      text: 'Acciones',
    },
    {
      iconUrl: '../../../assets/images/starIcon.png',
      text: 'Objetivos',
    },
    {
      iconUrl: '../../../assets/images/moneyIcon.png',
      text: 'Herramientas',
    },
    {
      iconUrl: '../../../assets/images/talkIcon.png',
      text: 'Servicio al cliente',
    }
  ]
}

