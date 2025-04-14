import { Router } from 'express';
import {allCity,cityByName,cityById} from '../controllers/cities/read.js';
import {create,createAll} from '../controllers/cities/create.js';
import update from '../controllers/cities/update.js';
import {deleteCity} from '../controllers/cities/delete.js';


const routerCities = Router();

routerCities.get('/allCities',allCity);
routerCities.get('/name/:nameParams',cityByName);
routerCities.get('/id/:id',cityById);
routerCities.post('/cityCreate',create); 
routerCities.post('/createAll',createAll);  
routerCities.put('/update/:id',update); // update a city by id
routerCities.delete('/delete/:id',deleteCity); // delete a city by id|

export default routerCities;