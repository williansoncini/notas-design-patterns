import { ShoppingOrder } from '../shoppingOrder';
import { OrderAproved } from './orderApproved';
import { OrderReject } from './orderReject';
import { ShoppingOrderState } from './shoppingOrderState';

export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log('Pedido aprovado');
    this.order.setState(new OrderAproved(this.order));
  }
  rejectPayment(): void {
    console.log('Pedido rejeitado');
    this.order.setState(new OrderReject(this.order));
  }
  waitPayment(): void {
    console.log('O estado do pedido já é pendente');
  }
  shipOrder(): void {
    console.log(
      'Devido ao pagamento estar pendente, o pedido não pode ser enviado',
    );
  }
}
