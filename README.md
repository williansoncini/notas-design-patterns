Começando com UML 🚀

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



















