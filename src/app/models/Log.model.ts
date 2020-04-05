import {PaymentModel} from './Payment.model';

export class LogModel {
  public payment: PaymentModel;
  public id: number;
  public response: string;
  public date: Date;

  constructor(payment: PaymentModel, id: number, response: string, date: string) {
    this.payment = payment;
    this.id = id;
    this.response = response;
    this.date = new Date(date);
  }
}
