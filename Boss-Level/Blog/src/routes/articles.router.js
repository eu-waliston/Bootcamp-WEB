const express = require("express");
const articleRouter = express.Router();
const path = require("path");

articleRouter.get('/', (req,res) => {
    res.send("Home");
})

module.exports = articleRouter;
