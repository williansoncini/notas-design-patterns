import { ProductStampDecorator } from './product/productStampDecorator';
import { Tshirt } from './product/tShirt';

const tshirt = new Tshirt();
const stampedTshirt = new ProductStampDecorator(tshirt);
console.log(tshirt.getName(), tshirt.getPrice());
console.log(stampedTshirt.getName(), stampedTshirt.getPrice());
