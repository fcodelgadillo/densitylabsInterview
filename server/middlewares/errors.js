const ErrorHandler = require('../utils/errorHandler');

// middleware for handling backend errors

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';

    let error = { ...err }

    // Wrong Mongoose Object ID
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`
        error = new ErrorHandler(message, 400)
    }

    // Handling Mongoose Validation Error
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        error: err
    })
}
