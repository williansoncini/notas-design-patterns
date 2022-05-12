import { EcommerceShoppingCart } from '../ecommerceShoppingCart';
import { DiscountStrategy } from './discountStrategy';

export class NewDiscount extends DiscountStrategy {
  getDiscount(cart: EcommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) {
      this.discount = 15;
    }

    return total - (total * this.discount) / 100;
  }
}
