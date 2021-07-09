// Write your "actions" router here!
const express = require("express");
const Actions = require("./actions-model");
const router = express.Router();

router.get("/", (req, res, next)=>{
    console.log("I am in actions router");
    //res.status(200).json({message:"I am in actions router"})
})

module.exports = router;
