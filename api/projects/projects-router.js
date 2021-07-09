// Write your "projects" router here!
const express = require("express");
const { checkProjectId, checkProjectPayload } = require("./projects-middleware");
const Projects = require("./projects-model");
const router = express.Router();

//`[GET] /api/projects`
router.get("/", (req, res, next)=>{
    console.log("I am in projects router");
    Projects.get()
    .then(data=>{
      res.json(data);
    })
    .catch(next)
    })
    
//`[GET] /api/projects/:id`
router.get('/:id', checkProjectId, (req, res, next) => {
        res.json(req.hub);
      });

// `[POST] /api/projects`
router.post('/', checkProjectPayload,(req, res, next) => {
    Projects.insert(req.body)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(next);
  });
  //`[PUT] /api/projects/:id`
  router.put('/:id', checkProjectId, checkProjectPayload, (req, res, next)=>{
      Projects.update(req.params.id, req.body)
      .then(project=>{
          res.status(200).json(project);
      })
      .catch(err=>{
          next(err);
      })
  })
  //`[DELETE] /api/projects/:id`
  router.delete('/:id', checkProjectId, (req, res, next)=>{
      Projects.remove(req.params.id)
      .then(()=>{
          res.status(200).json({message: `The project with id ${req.params.id} is deleted`})
      })
    // .then(next)
     .catch(next);
      
  })
  //`[GET] /api/projects/:id/actions`
  router.get('/:id/actions',checkProjectId, (req, res, next)=>{
      Projects.getProjectActions(req.params.id)
      .then(project=>{
        res.status(200).json(project)
      })
      
      .catch(next)
  })

module.exports = router;
