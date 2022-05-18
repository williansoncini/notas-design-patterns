import { ConcreteMemento } from './concreteMemento';
import { Memento } from './memento';

export class ImageEditor {
  constructor(private filePath: string, private fileFormat: string) {}

  convertImageTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.fileFormat.split('.').slice(0, -1).join('');
    this.filePath += '.' + format;
  }

  save(): Readonly<Memento> {
    const date = new Date();
    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat,
    );
  }

  restore(memento: Memento): void {
    const concreteMemento = memento as ConcreteMemento;
    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}
