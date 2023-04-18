const express = require('express');

require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors")

const rootRouter = require("./src/routes/articles.router");

const server = express();

//middlewares
server.use(express.json());
server.use(express.urlencoded({extended: true}))
server.use(bodyParser.urlencoded({ extended: true }));

//static and engine
// server.use();

//db connection
require('./src/config/db');

//API - endppoints
server.use("/", rootRouter);

//server listen
server.listen(process.env.PORT, () => {
    console.log(`Server listen on PORT ${process.env.PORT}`);

})