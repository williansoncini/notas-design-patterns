import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './mealBox';
import { Beans, Beverage, Rice } from './meals';

export class MainDishBuilderVegan implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 10);
    const beans = new Beans('Feijão', 4);
    const broccoli = new Beans('Brócolis', 7);
    const soyProtein = new Beans('Proteina de soja', 10);
    this._meal.add(rice, beans, broccoli, soyProtein);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Suco de laranja', 7);
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
