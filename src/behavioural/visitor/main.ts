import { BrasilTaxVisitor } from './brasilTaxVisitor';
import { Drink } from './drink';
import { Food } from './food';
import { UsaTaxVisitor } from './UsaTaxVisitor';

const food = new Food(10);
const drink = new Drink(10);

const brasilTaxVisitor = new BrasilTaxVisitor();
const usaTaxVisitor = new UsaTaxVisitor();

console.log('Taxa comida: ', food.getPriceWithTaxes(brasilTaxVisitor));
console.log('Taxa bebida: ', drink.getPriceWithTaxes(brasilTaxVisitor));
console.log('');
console.log('Taxa comida: ', food.getPriceWithTaxes(usaTaxVisitor));
console.log('Taxa bebida: ', drink.getPriceWithTaxes(usaTaxVisitor));
