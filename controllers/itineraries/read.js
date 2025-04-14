import Itinerary from "../../models/Itinerary.js";
import "../../models/City.js";
import { response } from "express";

let allItineraries = async (req, res, next) => {
    try {

        let itinerary = await Itinerary.find().populate('city', 'name').exec();

        if (itinerary.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Itineraries found",
                response: itinerary,
                
            });
        } else {
            return res.status(200).json({
                success: false,
                message: "No itineraries found",
                registers_found: result.length,
                data: result,
            });
        }
    } catch (error) {
        next(error);
    }
}

let itinerariesByCity = async (req, res, next) => {

}

let itinerariesByID = async (req, res, next) => {
    try {
        let idQuery = req.params.id;
        let itineraries = await Itinerary.findById(idQuery);
        return res.status(200).json({
            response: itineraries
        });
    } catch (error) {
        next(error);
    }
};

export { allItineraries, itinerariesByCity, itinerariesByID }


