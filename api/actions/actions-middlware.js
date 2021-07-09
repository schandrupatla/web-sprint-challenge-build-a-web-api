// add middlewares here related to actions

const logger = (req, res, next)=> {
    // DO YOUR MAGIC
     console.log(`
      REQUEST METHOD: ${req.method}
      REQUEST URL: ${req.originalUrl}
      TIMESTAMP: ${Date().toLocaleString()}
    `);
    next();
  }

const errorHandling = (err, req, res, next) => { // eslint-disable-line
    const status = err.status || 500
    res.status(status).json({
      message: err.message,
    })
  }
  module.exports = {
    logger ,
    errorHandling 

  }