import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './systemUserProtocol';

export class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public userName: string) {}

  getAddress(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Avenida', number: 110 },
          { street: 'Rua aqui nada demora', number: 999 },
        ]);
      }, 2000);
    });
  }
}
