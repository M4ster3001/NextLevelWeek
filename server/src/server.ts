import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const PORT: number = parseInt( ( process.env.PORT || 3333 ) as string, 10 );

const app = express();

app.use( express.json() );
app.use( routes );

if( app.listen() ) {
    let server = app.listen();
    server.close();
}

const server = app.listen( PORT, () => { console.log( `Servidor rodando na porta ${PORT}` ) } );