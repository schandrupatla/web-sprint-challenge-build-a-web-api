// Write your "actions" router here!
const express = require("express");
const { checkActionId, checkActionPayload } = require("./actions-middlware");
const Actions = require("./actions-model");
const router = express.Router();

`[GET] /api/actions`
router.get("/", (req, res, next)=>{
    //console.log("I am in actions router");
    Actions.get()
    .then(data=>{
        res.json(data);
    })
    .catch(next);
})

//`[GET] /api/actions/:id`
router.get('/:id', checkActionId,  (req, res, next)=>{
   // console.log(`i am in actions router with ${req.params.id}`)
     res.json(req.action);
})

//`[POST] /api/actions`
router.post('/', checkActionPayload, (req, res, next) => {
    Actions.insert(req.body)
      .then(action => {
        res.status(201).json(action);
      })
      .catch(next);
  });

  //`[PUT] /api/actions/:id`
  router.put('/:id', checkActionId, checkActionPayload, (req, res, next)=>{
    Actions.update(req.params.id, req.body)
    .then(action=>{
        res.status(200).json(action);
    })
    .catch(err=>{
        next(err);
    })
})

//`[DELETE] /api/actions/:id`
router.delete('/:id', checkActionId, (req, res, next)=>{
    Actions.remove(req.params.id)
    .then(()=>{
        res.status(200).json({message: `The action with id ${req.params.id} is deleted`})
    })
  // .then(next)
   .catch(next);
    
})

module.exports = router;
