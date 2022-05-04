interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string) {}

  clone(): Person {
    const newPerson = new Person(this.name);
    newPerson.addresses = this.addresses.map((item) => item.clone());
    return newPerson;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address = new Address('Alameda slim', 70);
const person = new Person('Original');
person.addAddress(address);

const copyPerson = person.clone();
person.addresses[0].street = 'Bla bla'; //problema
console.log(copyPerson.addresses);
