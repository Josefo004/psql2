import express, { Application } from 'express';
import cors from 'cors';

import rutasPredio from '../routes/predios.routes';

import http from 'http';
import db from '../DB/conex';

class Server {

  private app : Application;
  private portn : string;
  private httpServer : http.Server; 
  private api = {
    predios: '/api/predios'
  };


  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.portn = process.env.PORTN || '3500';

    //base de datos
    this.dbConnection();

    //middlewares
    this.middlewares();

    //definición de rutas
    this.routes();
    
  }
  //middlewares
  middlewares(){
    //cors
    this.app.use(cors());

    //Lectura del BODY en las peticiones
    this.app.use(express.json());

    //Carpeta del INDEX
    this.app.use(express.static('public'));
  }

  //base de datos
 async dbConnection() {
   try {
     await db.authenticate();
     console.log('Data Base On Line PSQL');
   } catch (error) {
     console.log(error);
     process.exit();
   }
 }
  
  //rutas
  routes(){
    this.app.use(this.api.predios, rutasPredio);
  }

  //listen
  listen(){
    this.httpServer.listen(this.portn, ()=>{
      console.log(`Servidor HTTP Corriendo en el puerto ${this.portn} !!`);
    });
  }
}

export default Server;