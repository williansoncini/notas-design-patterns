import { TaxVisitorProtocol } from './taxVisitorProtocol';
import { VisitableProduct } from './visitorProduct';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxForFood(this);
  }
}
