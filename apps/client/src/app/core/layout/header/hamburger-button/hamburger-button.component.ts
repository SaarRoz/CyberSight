import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.css'],
  standalone: true,
  imports: [NgClass],
})
export class HamburgerButtonComponent {
  @Output() buttonClick = new EventEmitter<MouseEvent>();
  @Input() isOpen = false;

  onClick(event: MouseEvent) {
    this.isOpen = !this.isOpen;
    this.buttonClick.emit(event);
  }
}
