import { Seller } from './seller';
import { SellecrProduct } from './typeProducts';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => this.sellers.push(seller));
  }

  buy(id: string): SellecrProduct | void {
    let product: SellecrProduct | void;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);

      if (product) {
        console.log('Produto: ', product.id, product.name, product.price);
        return;
      }
    }
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
