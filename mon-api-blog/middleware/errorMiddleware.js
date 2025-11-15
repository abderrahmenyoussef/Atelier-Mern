const urlnotfound = (req, res, next) => {
    const error = new Error(`URL Not Found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    var statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    if(err.code==11000){
        statusCode = 409
        err.message="Email or Username duplicated"
    }
    res.status(statusCode);
    res.json({
        message: "Error detected with Middleware",
        error: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = { urlnotfound, errorHandler };