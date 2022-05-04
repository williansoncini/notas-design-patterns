export abstract class Validate {
  abstract validate(value: any): boolean;
}

export class ValidateEmail extends Validate {
  validate(value: any): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateString extends Validate {
  validate(value: any): boolean {
    return typeof value === 'string';
  }
}

export class ValidateComposite extends Validate {
  private readonly children: Validate[] = [];

  add(...components: Validate[]): void {
    components.forEach((component) => this.children.push(component));
  }

  remove(component: Validate): void {
    const index = this.children.indexOf(component);
    this.children.splice(index, 1);
  }

  validate(value: any): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }
}

const validateEmail = new ValidateEmail();
const validateString = new ValidateString();

const validateComposite = new ValidateComposite();
validateComposite.add(validateEmail, validateString);

console.log(validateComposite.validate('teste@'));
