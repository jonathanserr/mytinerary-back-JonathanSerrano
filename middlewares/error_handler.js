import { response } from "express";

const error_handler = (error, req, res, next) => {
    return res.status(500).json({
        success: false,
        message: "Error in the server",
        response: error
    });
}
export default error_handler;