import { ProductProtocol } from './productProtocol';

export class Tshirt implements ProductProtocol {
  private name = 'Caemiseta';
  private price = 10.1;

  getPrice(): number {
    return this.price;
  }
  getName(): string {
    return this.name;
  }
}
