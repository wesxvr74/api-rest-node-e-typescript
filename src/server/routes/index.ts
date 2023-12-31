import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/cidades', (CidadesController.createValidator));

router.post('/cidades', (    
  CidadesController.createValidator
));

router.put('/teste', (_, res) => {

  try {

    return res.status(StatusCodes.BAD_REQUEST).send('Error message');

  } catch {

    return res.status(StatusCodes.OK).send('Updated!');

  }
});

export { router };
