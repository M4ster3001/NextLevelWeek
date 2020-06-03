import Knex from 'knex';

export async function up( knex: Knex ) {
    //
    return knex.schema.createTable( 'point_items', table => {
        table.increments( 'id' ).primary();

        table.integer( 'point_id' );

        table.foreign( 'point_id' )
        .references( 'id' )
        .inTable( 'points' )

        table.integer( 'item_id' );
        
        table.foreign( 'item_id' )
        .references( 'id' )
        .inTable( 'items' );

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    } )
}

export async function down( knex: Knex ) {
    //
    return knex.schema.dropTableIfExists( 'point_items' );
}
