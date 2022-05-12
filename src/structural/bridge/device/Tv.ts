import { DeviceProtocol } from './Device';

export class Tv implements DeviceProtocol {
  private name = 'TV';
  private powerStatus = false;
  private volume = 10;

  getName(): string {
    return this.name;
  }
  setPower(powerStatus: boolean): void {
    this.powerStatus = powerStatus;
  }
  getPower(): boolean {
    return this.powerStatus;
  }
  setVolume(volume: number): void {
    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
}
