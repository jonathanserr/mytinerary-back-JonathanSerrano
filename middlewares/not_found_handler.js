const not_found_handler = (req, res, next) => {
    return res.status(404).json({ 
        success: false,
        message: `The request with the method ${req.method} whith the route ${req.url} Not found`
    });
}
export default not_found_handler;