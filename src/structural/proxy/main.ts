import { SystemUserProxy } from './systemUser/systemUserProxy';

async function clientCode(): Promise<void> {
  const systemUserProxy = new SystemUserProxy('Sou teste', 'teste');

  console.log('Vai demora 2 segundos');
  for (let i = 0; i < 5; i++) {
    console.log(await systemUserProxy.getAddress());
  }
}

clientCode();
