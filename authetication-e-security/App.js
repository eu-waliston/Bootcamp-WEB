//jshint esversion:6
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");


const rootRouter = require("./routes/root.router");
const api = express();

//middlewares
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(cors());

api.set("view engine", "ejs");
api.use(express.static("public"));

api.use(
  session({
    secret: "new magic wand",
    resave: false,
    saveUninitialized: false,
  })
);

api.use(passport.initialize());
api.use(passport.session());

require("./config/database");

api.use("/", rootRouter);

api.listen(process.env.PORT, () => {
  console.log(`App Running on PORT ${process.env.PORT}`);
});
