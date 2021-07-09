
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
const express = require("express");
const helmet = require("helmet");
const actionsRouter = require("./actions/actions-router");
const {
    errorHandling
  } = require('./actions/actions-middlware');
// const projectsRouter = require("./projects/projects-router");

const server = express();
server.use(helmet());
server.use(express.json());
//***Test****/
    // server.get('/api/hello', (req, res) => {
    //     console.log(req.method)
    //     res.status(200).json({ message: "Hello World!!!" })
    //   })
//***Test****/

server.use("/api/actions", actionsRouter);
// server.use("/api/projects", projectsRouter);

server.use(errorHandling);

module.exports = server;
