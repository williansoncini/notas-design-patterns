import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const enterpriseCar = enterpriseFactory.createVehicle('Fusca', 'Albert');
const individualCar = individualFactory.createVehicle('Lambo', 'Nicola');

enterpriseCar.pickUp();
individualCar.pickUp();
