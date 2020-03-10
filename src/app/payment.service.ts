import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private httpService: HttpClient) {}

  public proceedPayment(bin: string, cardholderName: string, expirationMonth: string, expirationYear: string, cvv: string) {
    return this.httpService.post(environment.apiUrl + 'proceed', {
        bin,
        cardholderName,
        expirationMonth,
        expirationYear,
        cvv
      });
  }
}
