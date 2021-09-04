import {injectable} from "tsyringe";
import { LogClass } from './LogClass';

@injectable()
export class TesteWithDecorator {
  internalClass: LogClass;

  constructor(private logClass: LogClass) {
    this.internalClass = this.logClass;
  }

  exec = () => {
    this.internalClass.log('menssagem da classe Teste');
  };

  execute = () => {
    this.internalClass.log('menssagem da classe Teste');
  };
}
