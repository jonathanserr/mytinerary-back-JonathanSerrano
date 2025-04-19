import City from '../../models/City.js'

let update = async (req, res, next) => {
    try {
        let result = await City.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true } 
        )
        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Records found with SUCCESS',
                registers_found: `${result._id}`,
                data: result,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `The update was not performed`,
                registers_found: `${result._id}`,
                data: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

export default update 