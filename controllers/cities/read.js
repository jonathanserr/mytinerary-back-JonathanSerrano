import { response } from "express";
import City from "../../models/city.js";


let allCity = async (req, res, next) => {
    try {
        let all = await City.find()
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

let cityByName = async (req, res, next) => {
    try {
        let name = req.params.nameParams
        let all = await City.find({ name: name })
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

let cityById = async (req, res, next) => {
    try {
        let idQuery = req.params.id
        let all = await City.findById(idQuery)
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

export { allCity, cityByName, cityById }
