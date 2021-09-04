import "reflect-metadata";
import { doIt } from './src/anything';
import { doIt as doItDecorated } from './src/anythingWithDecorators';

console.log('inicio');

doIt();

doItDecorated()
