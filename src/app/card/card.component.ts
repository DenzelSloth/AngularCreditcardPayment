import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() name: string = '';
  @Input() cardNumber: string = '';
  @Input() expirationDate: string = '';

  constructor() {

  }

  ngOnInit() {

  }
}
