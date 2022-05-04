import { Carro } from './singleton-classic';

const carro1 = Carro.carro;
const carro2 = Carro.carro;

console.log(carro1 === carro2);
