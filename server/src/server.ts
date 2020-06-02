import express from 'express';
import routes from './routes';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'variables.env' });

const PORT: number = parseInt( ( process.env.PORT || 3333 ) as string, 10 );

const app = express();

app.use( express.json() );
app.use( routes );

if( app.listen() ) {
    let server = app.listen();
    server.close();
}

const server = app.listen( PORT, () => { console.log( `Servidor rodando na porta ${PORT}` ) } );