import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-validated-input',
  templateUrl: './validated-input.component.html',
})

export class ValidatedInputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() inputMask!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  showErrors() {
    return this.control.dirty && this.control.touched && this.control.errors;
  }


}
