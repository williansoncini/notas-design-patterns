import { Tv } from './device/Tv';
import { RemoteControl } from './remoteControl/RemoteControl';
import { RemoteControlWithVolume } from './remoteControl/RemoteControlWithVolume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower();

  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDown();
}

const tv = new Tv();
const remoteControl = new RemoteControl(tv);
// const remoteControl = new RemoteControlWithVolume(tv);
clientCode(remoteControl);
