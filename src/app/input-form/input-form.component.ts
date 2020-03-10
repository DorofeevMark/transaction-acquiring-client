import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ValidationService} from '../validation.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  public form: any;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      bin: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(19), ValidationService.creditCardValidator]],
      cardholderName: ['', Validators.required],
      expirationMonth: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      expirationYear: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      cvv: ['', [Validators.required, ValidationService.cvvValidator]]
    });
  }

  ngOnInit() {
  }

  proceedPayment() {
    if (this.form.dirty && this.form.valid) {

    }
  }

}
