import { DataTypes } from 'sequelize';
import db from '../DB/conex';

const Predio = db.define('Predio',{
  objectid: {
    type: DataTypes.INTEGER
  },
  manzana: {
    type: DataTypes.STRING  
  },
  predio: {
    type: DataTypes.STRING
  },
  referenciacatastral: {
    type: DataTypes.STRING  
  },
  claseespacio: {
    type: DataTypes.INTEGER  
  },
  tipoespacio: {
    type: DataTypes.INTEGER  
  },
  tipounidadcatastral: {
    type: DataTypes.INTEGER  
  },
  referenciacatastral_ant: {
    type: DataTypes.STRING  
  },
  poligono: {
    type: DataTypes.INTEGER  
  },
  shape: {
    type: DataTypes.GEOMETRY  
  }
},{
  tableName: 'parcelas'
});

export default Predio;