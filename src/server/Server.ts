import express from 'express';
import 'dotenv/config';
import './shared/services/translations';
import { router } from './routes';

const server = express();

server.use(express.json(), (req, res, next) =>{
  console.log('middleware executado');
  
  next();
});
server.use(router);

export { server };