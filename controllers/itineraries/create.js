import Itinerary from '../../models/Itinerary.js'

let create = async (req, res, next) => {
    try {
        let valueIterary = req.body
        let createItinerary = await Itinerary.create(valueIterary)
        return res.status(201).json({
            response: createItinerary,
            success: true,
            message: 'Itinerary created successfully',
        })   
    } catch (error) {
        next(error)
    }   
}
let createAll = async (req, res, next) => {
    try {
        let itineraries = req.body
        let insertManyItinerary = await Itinerary.insertMany(itineraries)
        return res.status(201).json({
            response: insertManyItinerary,
            message: 'Itineraries created successfully',
        })
    } catch (error) {
        next(error)
    }
}
export { create, createAll }
