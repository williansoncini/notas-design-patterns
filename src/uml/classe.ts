export class Classe {
  constructor(
    private _nome: string,
    public _sobrenome: string,
    protected _idade: number,
  ) {}

  public get nome(): string {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }

  public get idade(): number {
    return this._idade;
  }

  public set idade(idade: number) {
    this._idade = idade;
  }
}
