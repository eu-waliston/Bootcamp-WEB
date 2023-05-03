const express = require("express");
const rootRouter = express.Router();
const path = require("path");

const CreateUser = require("../models/user.model.js");

rootRouter.get("/", (req, res) => {
  res.status(200).render(path.join(__dirname, "..", "views", "home.ejs"));
});

// const md5 = require("md5");
const bcrypt = require("bcrypt");
const saltRound = 10;

rootRouter.get("/login", (req, res) => {
  res.status(200).render(path.join(__dirname, "..", "views", "login.ejs"));
});

rootRouter.get("/register", (req, res) => {
  res.status(200).render(path.join(__dirname, "..", "views", "register.ejs"));
});

rootRouter.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, saltRound, async function (err, hash) {
    let email = req.body.email;
    let password = hash;

    let newUser = new CreateUser({ email, password });

    try {
      let user = await newUser.save();
      res
        .status(200)
        .render(path.join(__dirname, "..", "views", "secrets.ejs"));
      console.log(user);
    } catch (error) {
      res.status(500).send({ error: "Can't Create a user :( " });
      console.log(error);
    }
  });
});

rootRouter.post("/login", async (req, res) => {
  let ussername = req.body.email;
  let password = req.body.password;

  let user = CreateUser.findOne({ email: ussername });
  let pass = CreateUser.findOne({ password: password });
  let passToSTR = pass.toString();

  if (user) {
    bcrypt.compare(password, passToSTR).then(function (result) {
      if (result == false) {
        res
          .status(200)
          .render(path.join(__dirname, "..", "views", "secrets.ejs"));
      } else {
        res.status(200).render(path.join(__dirname, "..", "views", "login.ejs"));
      }
    });
  } else {
    res.status(200).render(path.join(__dirname, "..", "views", "login.ejs"));
    console.log(err);
  }

  // bcrypt.compare(pass, user, function (err, result) {

  // });
});

module.exports = rootRouter;

// "email": "email.cool@hotmail.com",
// "password": 123456,
