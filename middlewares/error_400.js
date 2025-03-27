const error_400 = (error, req, res, next) => {
    if (error.status = "bad Request") {
        return res.status(400).json({
            success: false,
            message: 'Bad request: The parameter was not found or is invalid.',
            response: error
        });
    }
    next(error);
}
export default error_400;