import City from '../../models/City.js';
import { response } from 'express';



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
export default create;
