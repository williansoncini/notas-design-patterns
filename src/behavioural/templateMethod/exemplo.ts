export abstract class TemplateMethodBaseClass {
  abstract stepA(): void;
  abstract stepB(): void;
  hook(): void {}

  templateMethod() {
    this.stepA();
    this.hook();
    this.stepB();
  }
}

export class ConcreteTemplateMethod extends TemplateMethodBaseClass {
  stepA(): void {
    console.log('Sou o passo A');
  }

  stepB(): void {
    console.log('Sou o passo B');
  }

  hook(): void {
    console.log('Sou o hook, só bora para cima');
  }
}

const concreteTemplate = new ConcreteTemplateMethod();
concreteTemplate.templateMethod();
