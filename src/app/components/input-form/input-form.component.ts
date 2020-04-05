import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';
import {PaymentService} from '../../services/payment.service';
import {LogService} from '../../services/log.service';
import {PaymentModel} from '../../models/Payment.model';
import {CardModel} from '../../models/Card.model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  public form: any;

  constructor(private formBuilder: FormBuilder, private paymentService: PaymentService, private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      bin: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(19), ValidationService.creditCardValidator]],
      cardholderName: ['', Validators.required],
      expirationMonth: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      expirationYear: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      cvv: ['', [Validators.required, ValidationService.cvvValidator]],
      amount: [1, [Validators.required]],
      currency: ['USD', [Validators.required]],
      merchantId: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  proceedPayment() {
    this.paymentService.proceedPayment(
      new PaymentModel(
        new CardModel(this.form.value.bin,
          this.form.value.cardholderName,
          this.form.value.expirationMonth,
          this.form.value.expirationYear,
          this.form.value.cvv),
        parseInt(this.form.value.amount, 10),
        this.form.value.currency,
        this.form.value.merchantId
      )
    ).subscribe((res) => {
      this.snackBar.open('Successfully proceeded', 'Ok', {
        duration: 2000,
      });
    }, (err) => {
      this.snackBar.open('Something went wrong', 'Ok', {
        duration: 2000,
      });
    });
  }

}
