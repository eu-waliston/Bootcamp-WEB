const express = require("express");
const router = express.Router();

let tasks = ["ir ao mercado", "cortar o cabelo"];
let workItems = [];

router.get("/", (req, res) => {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("pt-BR", options);

  res.render("list", { listTitle: day, newListItems: tasks });
});

router.post("/", (req, res) => {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    tasks.push(item);
    res.redirect("/");
  }
});

router.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

router.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

//271
module.exports = router;
