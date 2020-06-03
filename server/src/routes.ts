import express, { response } from 'express';
import connection from './database/connection';

const routes = express.Router();

routes.get( '/items', async ( req, res ) => {
    const items = await connection( 'items' ).select( '*' );

    const listItems = items.map( ls => {
        return {
            id:  ls.id,
            title: ls.title,
            image_url: ls.image
        }
    } );

    return res.json( listItems );
} )

routes.get( '/points', async ( req, res ) => {
    const points = await connection( 'points' ).select( '*' );

    return res.json( points );
} )

routes.post( '/points', async( req, res ) => {
    const { name, email, telefone, latitude, longitude, city, uf, items } = req.body;

    const ids = await connection( 'points' ).insert({ image: 'img-fake', name, email, telefone, latitude, longitude, city, uf });

    const pointItems = items.map( (item_id: number) => {
        return {
            item_id,
            point_id: ids[0]
        }
    } )

    const pointsItems = await connection( 'point_items' ).insert( pointItems );

    return res.json({ success: true })
} )

export default routes;