import { Request, Response} from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';

export interface IParamProps {
  id?: number;
}

export const getByIdValidation = validation((getSchema) => ({ 
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const getById= async (req: Request<object, object, object, IParamProps>, res: Response)=>{

  console.log(req.params);
  
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não Implementado');

};