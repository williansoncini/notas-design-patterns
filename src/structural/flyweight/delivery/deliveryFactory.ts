import { DeliveryFlyweight } from './deliveryFlyweight';
import { DeliveryLocation } from './deliveryLocation';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './deliveryTypes';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLocaleLowerCase())
      .join('_');
  }

  makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
    const key = this.createId(intrinsicState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
