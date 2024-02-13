import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
export interface ICidade {
  cidade: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    cidade: yup.string().required().defined().min(3)
  }))
}));

export const create= async (req: Request<object, object, ICidade>, res: Response)=>{

  console.log(req.body);
  
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não Implementado');
};