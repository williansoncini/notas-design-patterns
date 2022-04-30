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
