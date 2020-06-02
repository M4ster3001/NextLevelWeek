import knex from 'knex';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'variables.env' });

const connection = knex({
    client: process.env.CLIENT_DB ? process.env.CLIENT_DB : 'sqlite3',
    connection: {
        filename: path.resolve( __dirname, 'src', 'database', 'database.sqlite' ) 
    },
    /*client: 'mysql',
    connection: {
        host: '127.0.0.1',    
        user: 'root',
        password: '',
        database: 'proj_rec'
    }*/
});

export default connection;