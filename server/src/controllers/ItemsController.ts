import connection from '../database/connection';
import { Request, Response } from 'express';

interface items {
    id: number;
    title: string;
    image: string;
}

export default class ItemsController {

    async index ( req:Request, res:Response ) {
        const items = await connection( 'items' ).select( '*' );
    
        const listItems = items.map( (ls: items) => {
            return {
                id:  ls.id,
                title: ls.title,
                image_url: ls.image
            }
        } );
    
        return res.json( listItems );
    } 

}