import { promises } from 'fs';
import { CustomerData } from './customerData';
import { CustomerDataParser } from './customerDataParser';

export class CustomerDataParserJson extends CustomerDataParser {
  protected async parseDate(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());

    const customerData: CustomerData[] = [];

    for (const customer of data) {
      const { name, age, cpf } = customer;
      customerData.push({ name, age: parseInt(age), cpf });
    }

    return customerData;
  }
}
