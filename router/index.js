import { Router } from "express";
import routerCities from "./citiesR.js";

let routerIndex = Router()
routerIndex.use('/cities',routerCities);



export default routerIndex