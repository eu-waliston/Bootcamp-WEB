const bodyParser = require("body-parser");
const rootRouter = require("./routes/index");
const request = require("request");


const express = require("express");
require('dotenv').config();
const App = express();

//middlewares
App.use(bodyParser.urlencoded({extended: true}))
App.use(express.json())

//Routes
App.use("/", rootRouter);

//Server
App.listen(process.env.DEV_PORT, () => {
    console.log(`🚀 App listenning on port ${process.env.DEV_PORT}`);
})