import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PaymentModel} from '../models/Payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private httpService: HttpClient) {
  }

  public proceedPayment(payment: PaymentModel) {
    return this.httpService.post(environment.apiUrl + 'proceed', {
      ...payment
    });
  }
}
