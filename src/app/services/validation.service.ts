import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  public static patters = {
    bin: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    cvv: /^[0-9]{3,4}$/
  };
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'Required',
      invalidCreditCard: 'Is invalid credit card number',
      invalidPassword:
        'Invalid password. Password must be at least 6 characters long, and contain a number.',
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      maxlength: `Maximum length ${validatorValue.requiredLength}`,
      invalidCvv: `Invalid CVV`
    };

    return config[validatorName];
  }

  static creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (
      control.value.match(
        ValidationService.patters.bin
      )
    ) {
      return null;
    } else {
      return { invalidCreditCard: true };
    }
  }

  static cvvValidator(control) {
    if (control.value.match(ValidationService.patters.cvv)) {
      return null;
    } else {
      return { invalidCvv: true };
    }
  }
}
