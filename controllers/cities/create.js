import City from '../../models/City.js';

let create = async (req, res, next) => {
    try {
        let cityInfo = req.body
        let createCity = await City.create(cityInfo)
        return res.status(201).json({
            response: createCity
        })
    } catch (error) {
        next(error)
    }
}

let createAll = async (req, res, next) => {
    try {
        let cities = req.body
        let insertManyCity = await City.insertMany(cities)
        return res.status(201).json({
            response: insertManyCity,
            message: 'Cities created successfully'
        })
    } catch (error) {
        next(error)
    }
}
export {create, createAll}
