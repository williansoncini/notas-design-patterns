export class ImageEditor {
  constructor(private filePath: string, private fileFormat: string) {}

  convertImageTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.fileFormat.split('.').slice(0, -1).join('');
    this.filePath += '.' + format;
  }
}
