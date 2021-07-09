// add middlewares here related to projects
const projectsDb = require("./projects-model");

const checkProjectId = async (req, res, next) => {
  try {
    const project = await projectsDb.get(req.params.id);
    if (project) {
      req.project = project;
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
const checkProjectPayload = async (req, res, next) => {
  if (!req.body.name || !req.body.description || !req.body.completed) {
    next({
      status: 400,
      message: "Missing name,description and completed required fields",
    });
  } else {
    next();
  }
};

module.exports = {
  checkProjectId,
  checkProjectPayload,
};
