import { Router } from "express";
import {allItineraries,itinerariesByCityId,itinerariesByID } from "../controllers/itineraries/read.js";
import {create,createAll} from "../controllers/itineraries/create.js";
import  {deleteItinerary}  from "../controllers/itineraries/delete.js";
import update from "../controllers/cities/update.js";

const routerItinerary = Router();

routerItinerary.get("/allItineraries", allItineraries); // Get all itineraries
routerItinerary.get("/city/:id", itinerariesByCityId); // Get itineraries by city ID
routerItinerary.get("/id/:id", itinerariesByID); // Get itinerary by ID

routerItinerary.post('/create',create)
routerItinerary.post('/createAll',createAll)

routerItinerary.put("/update/:id", update); // Update itinerary by ID
routerItinerary.delete("/delete/:id", deleteItinerary); // Delete itinerary by ID

export default routerItinerary;
