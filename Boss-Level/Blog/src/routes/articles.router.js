const express = require("express");
const articleRouter = express.Router();
const path = require("path");

const Article = require("../models/article.js");

articleRouter.get("/home", async (req, res) => {
  try {
    let allArticles = await Article.find({});

    res.status(200).render(path.join(__dirname, "../views", "home.ejs"), {
      allArticles: allArticles,
    });
  } catch (error) {
    res.status(500).send("</p>No data available!</p>");
  }
});

articleRouter.get("/about", (req, res) => {
  res.render(path.join(__dirname, "../views", "about.ejs"));
});

articleRouter.get("/post", (req, res) => {
  res.render(path.join(__dirname, "../views", "post.ejs"));
});

articleRouter.post("/post", (req, res) => {
  const author = req.body.author;
  const title = req.body.title;
  const article = req.body.article;

  const newArticle = new Article({ author, title, article });
  try {
    newArticle.save();
    res.redirect("/home");
  } catch (error) {
    res.status(422).send(err);
  }
});
module.exports = articleRouter;
