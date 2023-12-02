import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface ICidadeRequest {
  cidade: string;
  pais: string;
}

const bodyValidation: yup.Schema<ICidadeRequest>= yup.object().shape({

  cidade: yup.string().required().defined().min(3),
  pais: yup.string().required().defined().min(3)

});

export const createBodyValidator: RequestHandler = async (req, res, _next) => {

  try {
    await bodyValidation.validate(req.body, { abortEarly: false });

    return _next();

  } catch (err) {

    const yupError = err as yup.ValidationError;
    const errors: Record <string, string> = {};

    yupError.inner.forEach(error => {
      if (!error.path) return;
      errors[error.path] = error.message;
    }); 

    return res.status(StatusCodes.BAD_REQUEST).json({ 
      errors });
  }
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const create: RequestHandler = async (req: Request<{},{}, ICidadeRequest>, res: Response)=>{
  console.log(req.body);
  return res.send('Sucess!');
};
interface Ifilter {
    filter?: string;
}

const queryValidation: yup.Schema<Ifilter> = yup.object().shape({
  filter: yup.string().required().defined().min(3),
});

export const createQueryValidation: RequestHandler = async (req, res, _next) => {
  
  try {
    await queryValidation.validate(req.query, {abortEarly: false});
    return _next();
  }catch (err){
    const yupError = err as yup.ValidationError;
    const errors: Record <string, string> = {};

    yupError.inner.forEach(error => {
      if (!error.path) return;
      errors[error.path] = error.message;
    }); 
    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
};

export const createValidation = validation(queryValidation);