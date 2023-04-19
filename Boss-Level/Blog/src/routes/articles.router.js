const express = require("express");
const articleRouter = express.Router();
const path = require("path");

articleRouter.get('/', (req,res) => {
    res.render(path.join(__dirname, "../views", "home.ejs"));
})

module.exports = articleRouter;
