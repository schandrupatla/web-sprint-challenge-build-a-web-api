// Write your "projects" router here!
const express = require("express");
const Projects = require("./projects-model");
const router = express.Router();

router.get("/", (req, res, next)=>{
    console.log("I am in projects router");
    res.status(200).json({message:"I am in projects router"})
})

module.exports = router;
