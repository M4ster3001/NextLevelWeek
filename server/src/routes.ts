import express from 'express';
import connection from './database/connection';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get( '/items', itemsController.list);

routes.get( '/points', pointsController.list)

routes.post( '/points', pointsController.create);

export default routes;