import { DeviceProtocol } from '../device/Device';

export class RemoteControl {
  constructor(protected device: DeviceProtocol) {}

  togglePower() {
    this.device.setPower(!this.device.getPower());
  }
}
