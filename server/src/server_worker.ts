import cluster from 'cluster';
import os from 'os';
import fs from 'fs';

const numCPUs:number = os.cpus().length;
const numWorkers:number = Math.round( numCPUs * 0.5 );

if( cluster.isMaster ){
    console.log( `Master ${process.pid} is running and have ${numWorkers} workers...` );

    for ( let i = 0; i < numWorkers; i++ ){
        cluster.fork();
    }

    cluster.on( 'online', ( worker ) =>{
        console.log( `Worker ${worker.process.pid} is online` );
    } )

    cluster.on( 'exit', ( worker, code, signal ) => {

        console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
        
        console.log('Starting a new worker');
        cluster.fork();

    } )

} else {

    const app = express();

    app.use( cors( options ) )
    app.use( express.json() );
    app.use( routes );
    
    app.use( morgan('dev') );

    if( !fs.existsSync( '/uploads' ) ){
        fs.mkdirSync( '/uploads' );
    }
    
    app.use( '/uploads', express.static( path.resolve( __dirname, '..', 'uploads' ) ) );
    
    if( app.listen() ) {
        let server = app.listen();
        server.close();
    }

    const server = app.listen( PORT, () => { console.log( `Servidor rodando na porta ${PORT}` ) } );

    console.log( `Worker ${ process.pid } started` )

}