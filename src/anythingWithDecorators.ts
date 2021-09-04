import { container } from "tsyringe";
import { TesteWithDecorator } from './models/TesteWithDecorator';

export const doIt = () => {
  const myClass = container.resolve(TesteWithDecorator);

  myClass.execute();
};
