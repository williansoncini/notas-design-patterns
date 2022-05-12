import { DeliveryFlyweight } from './deliveryFlyweight';
import { DeliveryLocationData } from './deliveryTypes';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, number: string): void {
    console.log('Entrega para %s', name);
    console.log('Em: ', this.intrinsicState.city, this.intrinsicState.street);
    console.log('Numero: ', number);
    console.log('####');
  }
}
