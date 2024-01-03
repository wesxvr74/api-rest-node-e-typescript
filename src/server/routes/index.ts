import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/cidades', (CidadesController.createBodyValidator));

router.post('/cidades', (    
  CidadesController.createBodyValidator,
  CidadesController.createValidation
));

router.put('/teste', (_, res) => {

  try {

    return res.status(StatusCodes.BAD_REQUEST).send('Error message');

  } catch {

    return res.status(StatusCodes.OK).send('Updated!');

  }
});

export { router };
