import { Drink } from './drink';
import { Food } from './food';
import { TaxVisitorProtocol } from './taxVisitorProtocol';

export class BrasilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.5;
  }
  calculateTaxForDrink(drink: Drink): number {
    return drink.getPrice() + drink.getPrice() * 0.2;
  }
}
