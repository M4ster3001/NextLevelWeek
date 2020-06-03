import connection from '../database/connection';
import { Request, Response } from 'express';

export default class PointsController {

    async list( req: Request, res: Response ) {
        const points = await connection( 'points' ).select( '*' );
    
        return res.json( points );
    } 

    async create( req: Request, res: Response ) {
        const { name, email, telefone, latitude, longitude, city, uf, items } = req.body;

        const trx = await connection.transaction();

        const id_item = await trx( 'points' ).insert({ image: 'img-fake', name, email, telefone, latitude, longitude, city, uf });

        const pointItems = items.map( (item_id: number) => {
            return {
                item_id,
                point_id: id_item[0]
            }
        } )

        const pointsItems = await trx( 'point_items' ).insert( pointItems );

        return res.json({ success: true })
    }
}