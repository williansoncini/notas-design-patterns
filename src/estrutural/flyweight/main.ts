import { deliveryContext } from './delivery/deliveryContext';
import { DeliveryFactory } from './delivery/deliveryFactory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Albert', 'π', 'Genius street', 'physics city');
deliveryContext(factory, 'Nikola', 'π', 'Genius street', 'physics city');
deliveryContext(factory, 'Leonardo', 'π', 'Genius street', 'physics city');

console.log();
console.log(factory.getLocations());
