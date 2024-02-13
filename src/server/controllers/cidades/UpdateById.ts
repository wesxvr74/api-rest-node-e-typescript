import { Request, Response} from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';

export interface IParamProps {
  id?: number;
}

export interface IBodyProps {
  nome: string;
}

export const UpdateByIdValidation = validation((getSchema) => ({ 
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const UpdateById = async (req: Request<object, object, IParamProps, IBodyProps>, res: Response)=>{
  
  console.log(req.params);
  console.log(req.body);
 
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não Implementado');

};