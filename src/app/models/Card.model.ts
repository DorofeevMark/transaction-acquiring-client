export class CardModel {
  public bin: string;
  public cardholderName: string;
  public expirationMonth: string;
  public expirationYear: string;
  public cvv: string;

  constructor(bin: string, cardholderName: string, expirationMonth: string, expirationYear: string, cvv: string) {
    this.bin = bin;
    this.cardholderName = cardholderName;
    this.expirationMonth = expirationMonth;
    this.expirationYear = expirationYear;
    this.cvv = cvv;
  }
}
