import { Car } from '../vehicle/car';
import { Vehicle } from '../vehicle/vehicle';
import { VahicleFactory } from './vehicle-factory';

export class CarFactory extends VahicleFactory {
  getVehicle(vehicle: string): Vehicle {
    return new Car(vehicle);
  }
}
