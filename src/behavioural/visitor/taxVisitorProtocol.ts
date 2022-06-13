import { Drink } from './drink';
import { Food } from './food';

export interface TaxVisitorProtocol {
  calculateTaxForFood(food: Food): number;
  calculateTaxForDrink(drink: Drink): number;
}
