import { ShoppingOrder } from '../shoppingOrder';
import { OrderPending } from './orderPending';
import { OrderReject } from './orderReject';
import { ShoppingOrderState } from './shoppingOrderState';

export class OrderAproved implements ShoppingOrderState {
  private name = 'OrderApproved';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log('O estado do pedido já é aprovado');
  }
  rejectPayment(): void {
    console.log('Pedido rejeitado');
    this.order.setState(new OrderReject(this.order));
  }
  waitPayment(): void {
    console.log('Pedido em espera');
    this.order.setState(new OrderPending(this.order));
  }
  shipOrder(): void {
    console.log('Pedido sendo enviado para o cliente');
  }
}
