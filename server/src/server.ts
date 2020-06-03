import express from 'express';
import path from 'path'
import routes from './routes';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: 'variables.env' });

const PORT: number = parseInt( ( process.env.PORT || 3333 ) as string, 10 );

const options:cors.CorsOptions = {
    origin: process.env.API_URL,
    methods: "GET, POST",
    credentials: true,
    allowedHeaders: [ '*' ]
}

const app = express();

app.use( cors( options ) )
app.use( express.json() );
app.use( routes );

app.use( '/uploads', express.static( path.resolve( __dirname, '..', 'uploads' ) ) );

if( app.listen() ) {
    let server = app.listen();
    server.close();
}

const server = app.listen( PORT, () => { console.log( `Servidor rodando na porta ${PORT}` ) } );