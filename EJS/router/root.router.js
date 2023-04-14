const express = require("express");
const router = express.Router();

let tasks = ["ir ao mercado", "cortar o cabelo"];

router.get("/", (req, res) => {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }

  let day = today.toLocaleDateString("pt-BR", options)

  res.render("list", { kindOfday: day, newListItems: tasks });
});

router.post("/", (req, res) => {
  tasks.push(req.body.newItem)

  res.redirect("/")
})
//271
module.exports = router;
