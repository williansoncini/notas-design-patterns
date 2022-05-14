import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProducts({ id: '1', name: 'Camiseta', price: 49.9 });
seller1.addProducts({ id: '2', name: 'Caneca', price: 9.9 });

const seller2 = new Seller();
seller2.addProducts({ id: '3', name: 'Drone', price: 2548.54 });
seller2.addProducts({ id: '4', name: 'Skate', price: 400 });

mediator.addSeller(seller1, seller2);
mediator.showProducts();

const buyer1 = new Buyer(mediator);
buyer1.buy('1');
buyer1.buy('3');
