import { CustomerBudget } from './customer-budget';
import { DirectorBudgetHandler } from './directorBudgetHandler';
import { ManagerBudgetHandler } from './managerBudgetHandler';
import { SellerBudgetHandler } from './sellerBudgetHandler';

const customerBudget = new CustomerBudget(1000);
const sellerBudget = new SellerBudgetHandler();
sellerBudget
  .setNextHandle(new ManagerBudgetHandler())
  .setNextHandle(new DirectorBudgetHandler());
sellerBudget.handle(customerBudget);
