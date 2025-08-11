import { app } from './app';

console.log('aqui');

setImmediate(app.init.bind(app));
