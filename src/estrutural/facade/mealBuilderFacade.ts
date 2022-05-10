import { MainDishBuilder } from '../../creational/builder/exemplo-complexo/classes/main-dish-builder';
import { MainDishBuilderVegan } from '../../creational/builder/exemplo-complexo/classes/mainDishBuilderVegan';

export class MealBuilderFacade {
  private mainDishBuilder = new MainDishBuilder();
  private mainDishBuilderVegan = new MainDishBuilderVegan();

  makeMealBox1 = () => {
    this.mainDishBuilder.makeMeal().makeBeverage();
    const mealBox = this.mainDishBuilder.getMeal();
    console.log(mealBox);
  };

  makeMealBox2 = () => {
    this.mainDishBuilderVegan.makeMeal().makeBeverage();
    const veganMealBox = this.mainDishBuilderVegan.getMeal();
    console.log(veganMealBox);
  };
}
