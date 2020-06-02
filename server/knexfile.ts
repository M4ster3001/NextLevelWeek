import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: 'variables.env' });

module.exports = {
    client: process.env.CLIENT_DB ? process.env.CLIENT_DB : 'sqlite3',
    connection: {
        filename: path.resolve( __dirname, 'src', 'database', 'database.sqlite' ) 
    },
    useNullAsDefault: true,
    /*client: 'mysql',
    connection: {
        host: '127.0.0.1',    
        user: 'root',
        password: '',
        database: 'proj_rec'
    },*/
    migrations: {
        directory: path.resolve( __dirname, 'src', 'database', 'migrations' )
    }
};