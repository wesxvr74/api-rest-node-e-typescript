/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';

type TProperty = 'body' | 'query' | 'params' | 'header';

type TAllSchemas = Record<TProperty, yup.Schema<any>>;

export type TValidation = (Schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidation = (Schemas) => async (req: Request, res: Response, next: NextFunction) => {
  
  const errorsResult: Partial<Record<TProperty, Record<string, string>>> = {};

  Object.entries(Schemas).forEach(([key, schema]: [string, yup.Schema<any>]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });
    } catch (err) {
      const yupError = err as yup.ValidationError;
      const errors: Record<string, string> = {};

      yupError.inner.forEach((error) => {
        if (!error.path) return;
        errors[error.path] = error.message;
      });

      errorsResult[key as TProperty] = errors;
    }
  });
  if (Object.keys(errorsResult).length > 0) {
    return res.status(400).json({ errors: errorsResult });
  }

  next();
};
