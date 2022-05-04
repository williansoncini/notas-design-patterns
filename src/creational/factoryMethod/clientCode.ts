import { CarFactory } from './factories/car-factory';

const carFactory = new CarFactory();
const car = carFactory.getVehicle('Fusca');
car.pickUp('Joana');
car.stop();
