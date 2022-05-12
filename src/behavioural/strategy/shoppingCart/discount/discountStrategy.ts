import { EcommerceShoppingCart } from '../ecommerceShoppingCart';

export class DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: EcommerceShoppingCart) {
    return cart.getTotal();
  }
}
