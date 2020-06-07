import Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable( 'states', table => {
        table.increments( 'id' ).primary();
        table.string( 'name' ).notNullable();
        table.string( 'uf' ).notNullable();

        table.timestamp( 'updated_at' ).defaultTo( knex.fn.now() );  
        table.timestamp( 'created_at' ).defaultTo( knex.fn.now() );  
    } );
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists( 'states' );
}

