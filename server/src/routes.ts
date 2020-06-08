import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import StatesController from './controllers/StatesController';
import CitiesController from './controllers/CitiesController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();
const statesController = new StatesController();
const citiesController = new CitiesController();

routes.get( '/items', itemsController.index);

routes.get( '/points', pointsController.index)

routes.get( '/states', statesController.index)

routes.get( '/cities/:uf', citiesController.index)

routes.get( '/points/:id', pointsController.show)

routes.post( '/points', pointsController.create);

routes.put( '/points/:id', pointsController.update);

export default routes;