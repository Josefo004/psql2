import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validarCampos = (req: Request, res: Response, next: () => void) => {

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json(errores);
  }
  next();
  
}