import { ShoppingOrder } from '../shoppingOrder';
import { OrderAproved } from './orderApproved';
import { OrderPending } from './orderPending';
import { ShoppingOrderState } from './shoppingOrderState';

export class OrderReject implements ShoppingOrderState {
  private name = 'OrderReject';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log('O pedido está recusado, logo não pode ser aprovado');
  }
  rejectPayment(): void {
    console.log('O estado do pedido já rejeitado');
  }
  waitPayment(): void {
    console.log(
      'O pedido está recusado, logo não pode ser colocado em espera de pagamento',
    );
  }
  shipOrder(): void {
    console.log('Não posso enviar um pedido que foi recusado');
  }
}
