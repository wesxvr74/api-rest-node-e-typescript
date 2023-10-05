import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
const router = Router();

router.get('/', (_, res) => {

  return res.status(StatusCodes.OK).send('Get Funcionante');
});


router.post('/teste', (_, res) => {

  try {

    return res.status(StatusCodes.BAD_REQUEST).json("ohoo Noooow");

  } catch {

    return res.status(StatusCodes.OK).send('You Winn!');

  }

});


router.put('/teste2', (_, res) => {

  try {

    return res.status(StatusCodes.BAD_REQUEST).send('Error message');

  } catch {

    return res.status(StatusCodes.OK).send('Updated!');

  }
})

export {router};
