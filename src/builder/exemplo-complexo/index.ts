import { MainDishBuilder } from './classes/main-dish-builder';
import { MainDishBuilderVegan } from './classes/mainDishBuilderVegan';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage();
const mealBox = mainDishBuilder.getMeal();
console.log(mealBox);

const mainDishBuilderVegan = new MainDishBuilderVegan();
mainDishBuilderVegan.makeMeal().makeBeverage();
const veganMealBox = mainDishBuilderVegan.getMeal();
console.log(veganMealBox);
