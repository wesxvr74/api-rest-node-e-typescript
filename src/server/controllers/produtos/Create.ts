import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
interface ICidadeRequest {
  cidade: string;
  //pais: string;
}

const bodyValidation = yup.object().shape({

  // Parametros dos dados enviados

  cidade: yup.string().required().min(3),
  pais: yup.string().required().min(3)

});

export const create = async (req: Request<'{}', '{}', ICidadeRequest>, res: Response) => {
  let validatedData: ICidadeRequest | undefined = undefined;
  const validationErrors: Record<string, string> = {};

  // Validação de Dados
  
  try {

    validatedData = await bodyValidation.strict().noUnknown().validate(req.body, { abortEarly: false });

  } catch (err) {

    const yupError = err as yup.ValidationError;

    yupError.inner.forEach(error => {
      if (!error.path) return;
      validationErrors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: yupError.message,
    });
  }
  
  // Tratamento dos dados validados

  console.log(validatedData);
  
  return res.send('Create!');

};