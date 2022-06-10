import { BaseBudgetHandler } from './baseBudgetHandler';
import { CustomerBudget } from './customer-budget';

export class DirectorBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total > 1000) {
      console.log('Orçamento maior que 1000 Reais, o diretor tratou');
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
