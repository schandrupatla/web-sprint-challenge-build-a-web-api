// add middlewares here related to actions

const actionsDb = require("./actions-model");

const checkActionId = async (req, res, next) => {
  try {
    const action = await actionsDb.get(req.params.id);
    if (action) {
      req.action = action;
      next();
    } else {
      next({
        status: 404,
        message: `project with id ${req.params.id} not found`,
      });
    }
  } catch (err) {
    next(err);
  }
};

const checkActionPayload = (req, res, next) => {
  if (
    req.body.project_id === null ||
    req.body.project_id === undefined ||
    req.body.description === null ||
    req.body.description === undefined ||
    req.body.notes === null ||
    req.body.notes === undefined ||
    req.body.completed === null ||
    req.body.completed === undefined
  ) {
    next({
      status: 400,
      message:
        "Missing project_id, description, notes and comments required fields",
    });
  } else {
    next();
  }
};

const logger = (req, res, next) => {
  console.log(`
    REQUEST METHOD: ${req.method}
    REQUEST URL: ${req.originalUrl}
    TIMESTAMP: ${Date().toLocaleString()}
  `);
  next();
};

const errorHandling = (err, req, res, next) => {
  // eslint-disable-line
  const status = err.status || 500;
  res.status(status).json({
    message: err.message,
  });
};

module.exports = {
  logger,
  errorHandling,
  checkActionId,
  checkActionPayload,
};
