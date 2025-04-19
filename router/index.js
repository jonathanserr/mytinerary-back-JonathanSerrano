import { Router } from "express";
import routerCities from "./citiesR.js";
import routerItinerary from "./itinerariesR.js";


let routerIndex = Router()
routerIndex.use('/cities',routerCities);    
routerIndex.use('/itineraries',routerItinerary); // itineraries router




export default routerIndex