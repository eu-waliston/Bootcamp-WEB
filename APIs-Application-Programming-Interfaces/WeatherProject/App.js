const express = require("express");
const root = require("./routes/root");
require('dotenv').config();


const App = express();

App.use("/", root);

App.listen(process.env.DEV_PORT, () => {
    console.log(`Running on port ${process.env.DEV_PORT}.`);
});