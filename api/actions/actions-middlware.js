// add middlewares here related to actions
const errorHandling = (err, req, res, next) => { // eslint-disable-line
    const status = err.status || 500
    res.status(status).json({
      message: err.message,
    })
  }
  module.exports = {
    errorHandling 

  }