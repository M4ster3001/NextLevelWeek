import con from '../database/connection';
import { Request, Response } from 'express';

export default class States {

    async index( req: Request, res: Response ) {
        const { uf } = req.params;

        const lsCities = await con( 'cities' ).where( 'uf', uf ).select( 'id', 'name' ).orderBy( 'name_order', 'ASC' );

        return res.json( lsCities );
    }
}