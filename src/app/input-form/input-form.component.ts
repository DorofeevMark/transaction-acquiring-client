import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ValidationService} from '../validation.service';
import {PaymentService} from '../payment.service';
import {LogService} from '../log.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  public form: any;
  constructor(private formBuilder: FormBuilder, private paymentService: PaymentService, private logService: LogService) {
    this.form = this.formBuilder.group({
      bin: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(19), ValidationService.creditCardValidator]],
      cardholderName: ['', Validators.required],
      expirationMonth: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      expirationYear: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      cvv: ['', [Validators.required, ValidationService.cvvValidator]]
    });

    this.logService.getLogs().subscribe(logs => console.log(logs));
  }

  ngOnInit() {
  }

  proceedPayment() {
      console.log(this.form);
      this.paymentService.proceedPayment(
        this.form.value.bin,
        this.form.value.cardholderName,
        this.form.value.expirationMonth,
        this.form.value.expirationYear,
        this.form.value.cvv,
      ).subscribe(res => {
        console.log(res);
      });
  }

}
