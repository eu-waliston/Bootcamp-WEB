const express = require("express");
const root = require("./routes/root");
const bodyParser = require("body-parser");



require('dotenv').config();

const App = express();


App.use(express.json());
App.use(bodyParser.urlencoded({ extended: true}))
App.use(bodyParser.json())


App.use("/", root);

App.listen(process.env.DEV_PORT, () => {
    console.log(`Running on port ${process.env.DEV_PORT}.`);
});