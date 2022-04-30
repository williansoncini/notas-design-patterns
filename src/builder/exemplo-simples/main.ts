import { PersonBuilder } from './personBuilder';

const personBuilder = new PersonBuilder();
const person1 = personBuilder.setName('Albert').setAge(76).getResult();
personBuilder.newPerson();
const person2 = personBuilder.setName('Nicola').setAge(86).getResult();

console.log(person1);
console.log(person2);
