import { Router } from 'express';
import {allCity,cityByName,cityById} from '../controllers/cities/read.js';
import create from '../controllers/cities/create.js';


const routerCities = Router();

routerCities.get('/allCities',allCity);
routerCities.get('/name/:nameParams',cityByName);
routerCities.get('/id/:id',cityById);
routerCities.post('/cityCreate',create);   

export default routerCities;