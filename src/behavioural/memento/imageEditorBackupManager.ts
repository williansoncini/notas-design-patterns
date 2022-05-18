import { ImageEditor } from './imageEditor';
import { Memento } from './memento';

export class ImageEditorBackup {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log('Salvando o estado de image');
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log('Backuo: zero mementos');
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento.getName()} foi restaurado`);
  }

  showMementos(): void {
    this.mementos.forEach((memento) => console.log(memento));
  }
}
