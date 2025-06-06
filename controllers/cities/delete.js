import City from '../../models/City.js'

let deleteCity = async (req, res, next) => {
    try {
        let result = await City.findOneAndDelete(
            { _id: req.params.id }
        )
        if (result) {
            return res.status(200).json({
                success: true,
                message: 'delete SUCCESS',
                registers_found: `${result._id}`,
                data: result,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `The delete was not performed`,
                registers_found: `${result._id}`,
                data: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { deleteCity }