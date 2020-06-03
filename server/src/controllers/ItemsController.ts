import connection from '../database/connection';
import { Request, Response } from 'express';

export default class ItemsController {

    async index ( req:Request, res:Response ) {
        const items = await connection( 'items' ).select( '*' );
    
        const listItems = items.map( ls => {
            return {
                id:  ls.id,
                title: ls.title,
                image_url: ls.image
            }
        } );
    
        return res.json( listItems );
    } 

}