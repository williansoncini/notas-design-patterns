import { TaxVisitorProtocol } from './taxVisitorProtocol';
import { VisitableProduct } from './visitorProduct';

export class Drink extends VisitableProduct {
  constructor(protected price: number) {
    super('Drink', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxForDrink(this);
  }
}
