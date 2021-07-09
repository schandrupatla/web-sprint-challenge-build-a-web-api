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

module.exports = router;
