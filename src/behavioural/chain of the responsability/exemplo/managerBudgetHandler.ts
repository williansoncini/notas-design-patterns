import { BaseBudgetHandler } from './baseBudgetHandler';
import { CustomerBudget } from './customer-budget';

export class ManagerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log('O manager tratou o orçamento');
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
