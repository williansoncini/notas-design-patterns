import { DiscountStrategy } from './discount/discountStrategy';
import { EcommerceProductProtocol } from './ecommerceProductProtocol';

export class EcommerceShoppingCart {
  private products: EcommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: EcommerceProductProtocol[]): void {
    products.forEach((item) => this.products.push(item));
  }

  getProducts(): EcommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((prev, current) => prev + current.price, 0);
  }

  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}
