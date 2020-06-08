import express from 'express';
import path from 'path'
import routes from './routes';
import * as dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';


dotenv.config({ path: 'variables.env' });

const PORT: number = parseInt( ( process.env.PORT || 3333 ) as string, 10 );

console.clear();

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

app.use( morgan('short') );

if( !fs.existsSync( '/uploads' ) ){
    fs.mkdirSync( '/uploads' );
}

app.use( '/uploads', express.static( path.resolve( __dirname, '..', 'uploads' ) ) );

if( app.listen() ) {
    let server = app.listen();
    server.close();
}

const server = app.listen( PORT, () => { console.log( `Servidor rodando na porta ${PORT}` ) } );

