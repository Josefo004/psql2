import { Router } from 'express';
import { check } from 'express-validator';

import { getPredio, 
         getPredios } from '../controllers/predios.controllers';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/:cod_cat', [
  check('cod_cat','La solicitud debe tener mas de 5 caracteres').isLength({min:5}),
  validarCampos
], getPredios);

router.get('/objectid/:oid', getPredio);

export default router