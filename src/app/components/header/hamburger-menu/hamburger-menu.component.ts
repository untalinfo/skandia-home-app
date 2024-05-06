import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  onClick(): void {
    this.toggleSidebar.emit();
  }
}
