Começando com UML, mas acho que vou ter que fazer notas futuras a parte sobre ele, pois sei muito pouco 🚀

- [UML](#uml)
  - [Classe](#classe)
  - [Agregação](#agregação)
  - [Composição](#composição)
  - [Dependencia](#dependencia)
  - [Realization](#realization)
  - [Abstract](#abstract)
- [Design patterns](#design-patterns)
  - [Singleton](#singleton)
  - [Builder](#builder)
  - [Prototype](#prototype)
  - [Factory method](#factory-method)

# UML

## Classe

Exemplo de classe abaixo:

![](imgs/exemplo-classe.png)

```ts
export class Classe {
  constructor(
    private _nome: string,
    public _sobrenome: string,
    protected _idade: number
  ) {}

  public get nome(): string {
    return this._nome
  }

  public get idade(): number {
    return this._idade
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public set idade(idade: number){
    this._idade = idade
  }
}
```

## Agregação

Uma classe funciona sem a outra, porém para que ela funcione adequadamente ela precisaria receber a outra classe. Uma classe incrementa a outra.

Exemplo

![alt](imgs/agregação.png)

```ts
export class Motor {}

export class Carro {
  private motor: Motor;

  constructor(motor: Motor){
    this.motor = motor;
  }
}

const motor = new Motor;
const carro = new Carro(motor)
```

No exemplo a cima um carro consegue existir sem um motor

## Composição

Quando uma classe é totalmente dependente da outra. Logo uma classe não pode existir sem a outra.

Exemplo

![](imgs/composição.png)

```ts
class Motor {}

class Carro {
  private motor = new Motor()
}
```
No exemplo acima, um carro não consegue existir sem o Motor.

## Dependencia

Quando uma entidade depende de outra para funcionar

![](imgs/Dependency.png)

```ts
export class Document {}

export class Printer {
  print(document: Document){
    console.log(`Printing document: ${document}`)
  }
}
```

## Realization

![](imgs/realization.png)

```ts
interface ControleRemoto {
  play():void;
  pause():void;
}

class Bluray implements ControleRemoto{
  play(): void {}
  pause(): void {}
}

interface ControleSom extends ControleRemoto{
  mudarRadio():void;
}

class Som implements ControleSom{
  mudarRadio(): void {}
  play(): void {}
  pause(): void {}
}
```

## Abstract

![](imgs/abstract.png)


```ts
abstract class Animal {
  abstract makeNoise() :string
}

class Dog extends Animal{
  makeNoise(): string {
    return 'Random noise'
  }
}
```


# Design patterns

São vários! Então vamos repassar alguns ✅

## Singleton

Receber somente uma instancia de uma entidade em todo programa. Para que isso aconteca é necessário ter uma trativa na criação da entidade.

Estrutura

![](imgs/singleton.png)

exemplo de singleton classico
```ts
export class Carro {
  private static _carro: Carro | null = null;

  private constructor() {}

  static get carro(): Carro {
    if (Carro._carro === null) {
      Carro._carro = new Carro();
    }

    return Carro._carro;
  }
}
```

## Builder

![](imgs/builder.png)

Separar a criação de um objeto complexo da sua representação de modo que o mesmo processo de construção, possa criar diferentes representações.

> Código para o cliente

- Código que cria
- Código que usa

Utilizado em construção de objetos complexos
- Construtores muito complexos
- Composição de vários objetos (Composite)

- Permite a criação de um objeto em etapas
- Permite o method chaining - Encadeamento de chamadas de métodos

Esse método de criação de entidades para o cliente, remove a complexidade para o cliente, deixando-o somente com maneira faceis de invocar entidades para ele.

Exemplo simples, mas nos `src/builder/exemplo-complexo` existe um exemplo mais real :)

`Person.ts`

```ts
export class Person {
  constructor(public name?: string, public age?: number) {}
}
```

`personBuilder.ts`

```ts
import { Person } from './person';

export class PersonBuilder {
  private person = new Person();

  newPerson(): void {
    this.person = new Person();
  }

  setName(name: string): this {
    this.person.name = name;
    return this;
  }

  setAge(age: number): this {
    this.person.age = age;
    return this;
  }

  getResult(): Person {
    return this.person;
  }
}
```

`main.ts`

```ts
import { PersonBuilder } from './personBuilder';

const personBuilder = new PersonBuilder();
const person1 = personBuilder.setName('Albert').setAge(76).getResult();
personBuilder.newPerson(); // Reset do builder
const person2 = personBuilder.setName('Nicola').setAge(86).getResult();

console.log(person1);
console.log(person2);
```

## Prototype

![](imgs/prototype.png)

Especificar os tipos de objetos a serem criados usando uma instancia-protótipo e criar novos objetos pela cópia desse protótipo

> Criar novos objetos a partir da instancia do objeto

Temos um objeto criado e então se precisa de outro objeto, logo não fazemos new Object(), fazemos Object.create(object). Dessa maneira estamos criando um novo objeto utilizando o protótipo que passamos como parametro.

- O tipo do objeto a ser criado é determinado pelo objeto protótipo
- é tipicamente usado para evitar a recriação de objetos caros
- Ajuda a evitar a explosão de subclasses
- Pode (ou não) manter um registro de objetos protótipo em um objeto separado
- Geralmente é criado apenas como um método 'clone' dentro do objeto protótipo
- O metódo clone pode gerar uma 'shallow' ou 'deep' copy do objeto protótipo
- Evita que o cliente conheça as classes que criam o objeto. Para depender das classes concretas

> É necessário tomar cuidado ao utilizar a maneira padrão de cópia, que é a shallow copy. Essa maneira de cópia pode causar alterações em seus objetos clonados, se houver uma alteração no objeto 'pai'.

> Para clonar objetos de maneira mais segura (Para que não haja alterações), é necessário realizar uma deep copy. Que pode ser implementada na sua estrutura ou utilizar biblioteca de terceiros, como o lodash.

Exemplo

```ts
interface Prototype {
  clone(): Prototype;
}

class Person implements Prototype {
  constructor(public name: string) {}

  clone(): this {
    const newPerson = Object.create(this);
    return newPerson;
  }
}

const person = new Person('Albert');
const newPerson = person.clone();

person.name // Albert
newPerson.name // Albert
```

Exemplo simples

```ts
const person = {
  name: 'Albert'
}

const newPerson = Object.create(person)

person.name // Albert
newPerson.name // Albert
```

## Factory method

![](imgs/factoryMethod.png)

Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory method permite adiar a instanciação para as subclasses.

Simplesmente operações que criam objetos.

Muito boa para nunca deprender diretamente de classes concretas, deixando assim seu código desacoplado.

Exemplo

```ts
interface Product {
  sayHi(): void;
}

export class concreteProduct implements Product {
  sayHi(): void {
    console.log('Hi!');
  }
}

abstract class Creator {
  abstract factoryMethod(): Product;

  creteAndShow(): void {
    const product = this.factoryMethod();
    console.log(product);
  }
}

export class ConcreteCreator extends Creator {
  factoryMethod(): Product {
    return new concreteProduct();
  }
}

const creator = new ConcreteCreator();
const product = creator.factoryMethod();
product.sayHi();
creator.creteAndShow();
```







