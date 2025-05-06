import Itinerary from "../../models/Itinerary.js";

let allItineraries = async (req, res, next) => {
    try {

        let itinerary = await Itinerary.find()

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

let itinerariesByCityId = async (req, res, next) => {
    try {
        let cityId = req.params.id; // asegúrate de que el parámetro sea el ID, no el nombre

        // Filtrar directamente por cityId
        let itineraries = await Itinerary.find({ cityId }) 
            .populate('cityId', 'name photo description')
            .exec();

        if (!itineraries || itineraries.length === 0) {
            return res.status(404).json({ message: "No itineraries found for this city" });
        }

        return res.status(200).json({
            response: itineraries
        });
    } catch (error) {
        next(error);
    }
};



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

export { allItineraries, itinerariesByCityId, itinerariesByID }


