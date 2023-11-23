import { RequestHandler, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface ICidadeRequest {
  cidade: string;
  pais: string;
}

const bodyValidation: yup.Schema= yup.object().shape({

  cidade: yup.string().required().defined().min(3),
  pais: yup.string().required().defined().min(3)

});

export const createBodyValidator: RequestHandler = async (req, res, _next) => {
  
  try {
    await bodyValidation.validate(req.body, { abortEarly: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types
    const create = (req: Request<{},{}, ICidadeRequest>, res: Response, next: NextFunction) => {  
    };
    return _next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record <string, string> = {};

    yupError.inner.forEach(error => {
      if (!error.path) return;
      errors[error.path] = error.message;
  
    }); 
    return res.status(StatusCodes.BAD_REQUEST).json({ Error });
  }
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
    return res.status(StatusCodes.BAD_REQUEST).json({ Error });
  }
};

export const createValidation = validation();