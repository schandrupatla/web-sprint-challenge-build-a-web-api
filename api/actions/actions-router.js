// Write your "actions" router here!
const express = require("express");
const { checkActionId, checkActionPayload } = require("./actions-model");
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

module.exports = router;
