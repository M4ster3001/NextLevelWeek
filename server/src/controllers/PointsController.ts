import connection from '../database/connection';
import { Request, Response } from 'express';
import { parse } from 'dotenv/types';

export default class PointsController {

    async index( req: Request, res: Response ) {
        const { city, uf, items } = req.query;

        let points;

        if( items ) {
            const parsedItems = String( items ).split( ',' ).map( item => Number( item.trim() ) );

            points = await connection( 'points' )
            .join( 'point_items', 'points.id', '=', 'point_items.point_id' )
            .whereIn( 'point_items.item_id', parsedItems )
            .where( 'city', String( city ) )
            .where( 'uf', String( uf ) )
            .distinct()
            .select( 'points.*' );

        } else {
            
            points = await connection( 'points' )
            .select( '*' );
        }
        
       

        if( !points ) {
            return res.json({ error: 'Nenhum registro encontrado' })
        }
    
        return res.json( points );
    } 

    async show( req: Request, res: Response ) {
        const { id } = req.params;

        const points = await connection( 'points' ).where( 'id', id ).first(); 

        if( !points ) {
            return res.json({ error: 'Nenhum registro encontrado' })
        }

        const items = await connection( 'items' )
        .join( 'point_items', 'items.id', '=', 'point_items.item_id' )
        .where( 'point_items.point_id', id )
        .select( 'items.title' );
    
        return res.json({ points, items });
    } 

    async create( req: Request, res: Response ) {
        const { name, email, telefone, latitude, longitude, city, uf, items } = req.body;

        const trx = await connection.transaction();

        const point = { image: 'img-fake', name, email, telefone, latitude, longitude, city, uf };

        const id_item = await trx( 'points' ).insert( point );

        const point_id = id_item[0];

        const pointItems = items.map( (item_id: number) => {
            return {
                item_id,
                point_id,
            };
        } )
            
        await trx( 'point_items' ).insert( pointItems );
        await trx.commit();

        return res.json({
            id: point_id,
            ...point,
        });
    }
}