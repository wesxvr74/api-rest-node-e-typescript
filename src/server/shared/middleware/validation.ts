import { RequestHandler } from 'express';

type Tvalidation = () => RequestHandler;


export const validation: Tvalidation = () => async () => {
  console.log('Create ');

};