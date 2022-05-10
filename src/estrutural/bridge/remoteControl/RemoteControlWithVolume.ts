import { RemoteControl } from './RemoteControl';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldvolume = this.device.getVolume();
    this.device.setVolume(oldvolume + 1);
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume - 1);
  }
}
