import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  constructor(private name: string) {}

  stop(): void {
    console.log(`${this.name} parou`);
  }

  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }
}
