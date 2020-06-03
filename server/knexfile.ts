// Update with your config settings.
import path from 'path';

export default {

    development: {
      client: 'sqlite3',
      connection: {
        filename: path.resolve( __dirname, 'src', 'database', 'database.sqlite' ),
        acquireConnectionTimeout: 10000
      },
      migrations: {
        directory: path.resolve( __dirname, 'src', 'database', 'migrations')
      },
      seeds: {
        directory: path.resolve( __dirname, 'src', 'database', 'seeds' )
      },
      useNullAsDefault: true,
      debug: true,
      pool: {
        min: 1,
        max: 20,
      },
      
    },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };
  