import { LightPowerCommand } from './smartHouse/lightPowerCommand';
import { SmartHouseLight } from './smartHouse/smarthHouseLight';
import { SmartHouseApp } from './smartHouse/smartHouseApp';

// Receiver
const smarthouseLight = new SmartHouseLight('Samsung');

//Command
const lighPowerCommand = new LightPowerCommand(smarthouseLight);

//Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('BOTAO-1', lighPowerCommand);
smartHouseApp.executeCommand('BOTAO-1');
