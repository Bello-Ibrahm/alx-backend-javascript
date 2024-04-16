export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amnt) {
    if ((typeof amnt !== 'number') && !(amnt instanceof Number))  {
      throw new TypeError('Amount must be a number');      
    }
    this._amount = amnt;
  }

  get currency() {
    return this._currency;
  }

  set currency(curr) {
    if (curr instanceof Currency) {
      this._currency = curr;
      return;
    }
    throw new TypeError('Currency must be an instance of Currency');
  }
  
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
  
  static converPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');      
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
