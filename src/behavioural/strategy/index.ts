import { NewDiscount } from './shoppingCart/discount/newDiscount';
import { EcommerceShoppingCart } from './shoppingCart/ecommerceShoppingCart';

const shoppingCart = new EcommerceShoppingCart();
// shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();

shoppingCart.addProduct({ name: 'Produto A', price: 50 });
shoppingCart.addProduct({ name: 'Produto B', price: 50 });
shoppingCart.addProduct({ name: 'Produto C', price: 50 });
shoppingCart.addProduct({ name: 'Produto D', price: 50 });

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
