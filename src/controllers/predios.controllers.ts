import { Request, Response } from 'express';
import { consulta_predios } from '../helpers/cPredios';

export const getPredios = async (req: Request, res: Response) => {
  const { cod_cat } = req.params;
  const resultado = await consulta_predios(cod_cat);
  
  res.status(200).json({resultado}); 
  
}

export const getPredio = (req: Request, res: Response) => {
  const { oid } = req.params;
  
  res.json({oid});
}