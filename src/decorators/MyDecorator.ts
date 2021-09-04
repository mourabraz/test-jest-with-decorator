import { LogClass } from "../models/LogClass";

function MyClassDecorator<T extends { new (...args: any[]): {} }>(DecoratedClass: T) {
  return class extends DecoratedClass {
    constructor (...args: any[]) {
      super(new LogClass())
    }
  };
}

export const injectable = () => MyClassDecorator