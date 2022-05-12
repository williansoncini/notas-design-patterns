import { AdminUser } from './adminUser';
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './systemUserProtocol';

export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAddresses: SystemUserAddressProtocol[] | null = null;

  constructor(public firstName: string, public userName: string) {}

  private createRealUser() {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }

    return this.realUser;
  }

  async getAddress(): Promise<SystemUserAddressProtocol[]> {
    this.realUser = this.createRealUser();

    if (this.realUserAddresses === null) {
      this.realUserAddresses = await this.realUser.getAddress();
    }

    return this.realUserAddresses;
  }
}
