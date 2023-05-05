const express = require("express");
const rootRouter = express.Router();
const path = require("path");

const CreateUser = require("../models/user.model.js");
const passport = require("passport");

passport.use(CreateUser.createStrategy());
passport.serializeUser(CreateUser.serializeUser());
passport.deserializeUser(CreateUser.deserializeUser());

rootRouter.get("/", (req, res) => {
  res.status(200).render(path.join(__dirname, "..", "views", "home.ejs"));
});

rootRouter.get("/login", (req, res) => {
  res.status(200).render(path.join(__dirname, "..", "views", "login.ejs"));
});

rootRouter.get("/register", (req, res) => {
  res.status(200).render(path.join(__dirname, "..", "views", "register.ejs"));
});

rootRouter.get("/secrets", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).render(path.join(__dirname, "..", "views", "secrets.ejs"));
  } else {
    res.status(200).render(path.join(__dirname, "..", "views", "login.ejs"));
  }
});

rootRouter.post("/register", async (req, res) => {
  CreateUser.register(
    { username: req.body.email },
    req.body.password, function(err, user) {
      if(err) {
        console.log(err);
        res.redirect(path.join(__dirname, "..", "views", "register.ejs"))
      } else {
        passport.authenticate("local" ,(req,res,) => {
          res.redirect(path.join(__dirname, "..", "views", "secrets.ejs"))
        })
      }
    }
  );
});

rootRouter.post("/login", async (req, res) => {});

module.exports = rootRouter;
