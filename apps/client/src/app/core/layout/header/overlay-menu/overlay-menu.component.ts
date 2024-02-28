import { NgIf } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES_CONFIG, RoutesConfig } from '~app/configs/routes.config';

@Component({
  selector: 'app-overlay-menu',
  templateUrl: './overlay-menu.component.html',
  styleUrls: ['./overlay-menu.component.css'],
  standalone: true,
  imports: [NgIf, RouterLink],
})
export class OverlayMenuComponent {
  @Input() isUserLoggedIn = false;
  @Output() itemClick = new EventEmitter<MouseEvent>();
  constructor(@Inject(ROUTES_CONFIG) public routesConfig: RoutesConfig) {}

  onClick(event: MouseEvent) {
    this.itemClick.emit(event);
  }
}
