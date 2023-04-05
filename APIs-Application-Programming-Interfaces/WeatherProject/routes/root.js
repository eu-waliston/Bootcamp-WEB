const express = require("express");
const https = require("https");
require('dotenv').config();

const URL = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.API_KEY}`

const router = express.Router();

router.get("/", (req,res) => {

    https.get(URL, function(response) {
        console.log(response);
    })

    res.send("Running SErver")
})

module.exports =  router;