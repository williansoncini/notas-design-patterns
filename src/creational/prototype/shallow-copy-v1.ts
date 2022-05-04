interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  constructor(public name: string) {}

  clone(): this {
    const newPerson = Object.create(this);
    return newPerson;
  }
}

const person = new Person('Original');
const copyPerson = person.clone();
