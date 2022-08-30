import { Op } from 'sequelize';
import Predio from '../models/predio';

/* export const consulta_predios = async (cc:string) => {

  let q: string = `SELECT p.objectid, p.referenciacatastral_ant, p.shape 
    FROM parcelas p 
    WHERE p.referenciacatastral_ant LIKE '${cc}%' 
    ORDER BY p.referenciacatastral_ant limit 5;`;

    const results = await db.query(q);
  
    return results;
  
} */

export const consulta_predios = async (cc: string) => {
  const predios = await Predio.findAll({
    attributes: ['objectid', 'referenciacatastral_ant'],
    where: {
      referenciacatastral_ant:{
        [Op.like]: `${cc}%`
      }
    },
    order: ['referenciacatastral_ant'],
    limit: 100
  });

  return predios;
  
}