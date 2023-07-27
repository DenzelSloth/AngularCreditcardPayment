import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
})

export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(19), Validators.maxLength(19)]),
    expirationDate: new FormControl('', [Validators.required, Validators.pattern(/^(1[0-2]|0?[1-9])\/(2[2-9]|[3-9]\d)$/)]),
    cvvCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
  }

  onResetClick() {
    this.cardForm.reset();
  }
}
