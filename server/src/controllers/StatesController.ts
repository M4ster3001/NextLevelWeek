import con from '../database/connection';
import { Request, Response } from 'express';

export default class States {

    async index( req: Request, res: Response ) {
        const lsStates = await con( 'states' ).select( 'id', 'name', 'uf' );

        return res.json( lsStates );
    }
}