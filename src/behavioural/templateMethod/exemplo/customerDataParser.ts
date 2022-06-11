import { CustomerData } from './customerData';

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  fixCustomerData = async (): Promise<void> => {
    this.customerData = await this.parseDate();
    this.customerData = this.fixCpf();
  };

  private fixCpf(): CustomerData[] {
    return this.customerData.map((customer) => {
      return { ...customer, cpf: customer.cpf.replace(/\D/g, '') };
    });
  }

  protected abstract parseDate(): Promise<CustomerData[]>;
}
