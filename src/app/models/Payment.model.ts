import {CardModel} from './Card.model';

export class PaymentModel {
  public card: CardModel;
  public amount: number;
  public currency: string;
  public merchantId: string;

  constructor(card: CardModel, amount: number, currency: string, merchantId: string) {
    this.card = card;
    this.amount = amount;
    this.currency = currency;
    this.merchantId = merchantId;
  }
}
