import { LogClass } from './LogClass';

export class Teste {
  internalClass: LogClass;

  constructor() {
    this.internalClass = new LogClass();
  }

  exec = () => {
    this.internalClass.log('menssagem da classe Teste');
  };

  execute = () => {
    this.internalClass.log('menssagem da classe Teste');
  };
}
