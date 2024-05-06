import { Component, EventEmitter, Output } from '@angular/core';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ HamburgerMenuComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  handleToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
