import { Router } from 'express';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/cidades', (CidadesController.getAllValidation,CidadesController.getAll));
router.post('/cidades', (CidadesController.createValidation, CidadesController.create));
router.get('/cidades/:id', (CidadesController.getByIdValidation, CidadesController.getById));
router.put('/cidades/:id', (CidadesController.UpdateByIdValidation,CidadesController.UpdateById));
router.delete('/cidades/:id', (CidadesController.DeleteByIdValidation,CidadesController.DeleteById));

export { router };