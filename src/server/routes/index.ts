import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {

  return res.status(StatusCodes.OK).send('wahoo');

});

router.post('/cidades', (CidadesController.create));


router.put('/teste2', (_, res) => {

  try {

    return res.status(StatusCodes.BAD_REQUEST).send('Error message');

  } catch {

    return res.status(StatusCodes.OK).send('Updated!');

  }
});

export { router };
