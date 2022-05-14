import { SellecrProduct } from './typeProducts';
import { Mediator } from './mediator';

export class Seller {
  private products: SellecrProduct[] = [];
  private _mediator?: Mediator;

  showProducts(): void {
    this.products.forEach((product) => {
      console.log(product.id, product.name, product.price);
    });
  }

  addProducts(...products: SellecrProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  set mediator(mediator: Mediator) {
    this._mediator = mediator;
  }

  sell(id: string): SellecrProduct | void {
    const productIndex = this.products.findIndex(
      (product) => (product.id = id),
    );
    if (productIndex === -1) return;
    const product = this.products.splice(productIndex, 1);
    return product[0];
  }
}
