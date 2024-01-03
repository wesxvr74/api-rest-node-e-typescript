import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface ICidadeRequest {
  cidade: string;
  pais: string;
}

export const createBodyValidator = validation({
  body: yup.object().shape({
    cidade: yup.string().required().defined().min(3),
    pais: yup.string().required().defined().min(3)  
  }),
  query: yup.object().shape({
    filter: yup.string().required().min(3),
  }),
});

export const createValidation = validation({
  body: yup.object().shape({
    cidade: yup.string().required().defined().min(3),
    pais: yup.string().required().defined().min(3)  
  }),
  query: yup.object().shape({
    filter: yup.string().required().min(3),
  }),
});

// eslint-disable-next-line @typescript-eslint/ban-types
export const create: RequestHandler = async (req: Request<{},{}, ICidadeRequest>, res: Response)=>{
  console.log(req.body);
  return res.send('Sucess!');
};