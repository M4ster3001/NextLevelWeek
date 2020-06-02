import Knex from 'knex';
const table = 'points';

export async function up( knex: Knex ) {
    //
    knex.schema.createTable( table, table => {
        table.increments( 'id' ).primary();
        table.string( 'image' ).notNullable();
        table.string( 'name' ).notNullable();
        table.string( 'email' ).notNullable();
        table.string( 'telefone' ).notNullable();
        table.decimal( 'latitude' ).notNullable();
        table.decimal( 'longitude' ).notNullable();
        table.string( 'city' ).notNullable();
        table.string( 'uf', 2 ).notNullable();
    } )
}

export async function down( knex: Knex ) {
    //
    knex.schema.dropTable( table );
}
