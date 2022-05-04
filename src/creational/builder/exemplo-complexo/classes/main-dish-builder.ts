import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './mealBox';
import { Beans, Beverage, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 30);
    const beans = new Beans('Feijão', 20);
    this._meal.add(rice, beans);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Suco de laranja', 13);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
}
