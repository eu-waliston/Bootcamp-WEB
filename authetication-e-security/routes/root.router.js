const express = require("express");
const rootRouter = express.Router();
const path = require("path");

const CreateUser = require("../models/user.model.js");

rootRouter.get("/", (req, res) => {
  res.status(200).render(path.join(__dirname, "..", "views", "home.ejs"));
});

rootRouter.get("/login", (req, res) => {
  res.status(200).render(path.join(__dirname, "..", "views", "login.ejs"));
});

rootRouter.get("/register", (req, res) => {
  res.status(200).render(path.join(__dirname, "..", "views", "register.ejs"));
});

rootRouter.post("/register", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let newUser = new CreateUser({ email, password });

  try {
    let user = await newUser.save();
    res.status(200).render(path.join(__dirname, "..", "views", "secrets.ejs"));
    console.log(user);
  } catch (error) {
    res.status(500).send({ error: "Can't Create a user :( " });
  }
});

rootRouter.post("/login", async (req, res) => {
  let ussername = req.body.email;
  let password = req.body.password;

  let user = await CreateUser.findOne({email: ussername}).exec();
    
  if (user) {
    res.status(200).render(path.join(__dirname, "..", "views", "secrets.ejs"));

  } else {
    res.status(200).render(path.join(__dirname, "..", "views", "login.ejs"));
  }
});

module.exports = rootRouter;

// "email": "email.cool@hotmail.com",
// "password": 123456,
