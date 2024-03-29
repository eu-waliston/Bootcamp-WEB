const express = require("express");
const rootRouter = express.Router();

const Articles = require("../models/articles.js");

rootRouter.get("/articles", async (req, res) => {
  try {
    let AllArticles = await Articles.find({});
    res.status(200).send(AllArticles);
  } catch (error) {
    res.status(500).send(error)
  }
});

rootRouter.post('/articles', async (req,res) => {
    let newArticle = new Articles(req.body);
    try {
        newArticle.save()
        res.status(200).send(newArticle);
    } catch (error) {
        res.status(500).send(error)
    }

})

module.exports = rootRouter;
