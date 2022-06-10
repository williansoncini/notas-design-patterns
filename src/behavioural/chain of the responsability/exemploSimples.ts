abstract class ObjetoCadeia {
  protected proximo: ObjetoCadeia | null = null;

  addProximo(proximo: ObjetoCadeia): ObjetoCadeia {
    this.proximo = proximo;
    return proximo;
  }

  trata(requisicao: string): string {
    if (this.proximo) return this.proximo.trata(requisicao);
    return requisicao;
  }
}

class ObjectA extends ObjetoCadeia {
  trata(requisicao: string): string {
    return super.trata(requisicao + ' Object-A');
  }
}

class ObjectB extends ObjetoCadeia {
  trata(requisicao: string): string {
    return super.trata(requisicao + ' Object-B');
  }
}

const objectA = new ObjectA();
objectA.addProximo(new ObjectB()).addProximo(new ObjectA());
console.log(objectA.trata('Exemplo de requisição!')); // Exemplo de requisição! Object-A Object-B Object-A
