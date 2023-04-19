const express = require("express");
const articleRouter = express.Router();
const path = require("path");

articleRouter.get('/home', (req,res) => {
    res.render(path.join(__dirname, "../views", "home.ejs"));
})

articleRouter.get('/about', (req,res) => {
    res.render(path.join(__dirname, "../views", "about.ejs"))
})

articleRouter.get('/post', (req,res) => {
    res.render(path.join(__dirname, "../views", "post.ejs"))
})

module.exports = articleRouter;
