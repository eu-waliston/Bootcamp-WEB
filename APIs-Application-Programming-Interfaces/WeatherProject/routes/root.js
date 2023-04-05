const express = require("express");
const https = require("https");
require('dotenv').config();


const router = express.Router();

router.get("/", (req,res) => {

    const URL = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.API_KEY}`

    https.get(URL, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherList = JSON.parse(data)
            console.log(weatherList.city);
        })
    })

    res.send("Running SErver")
})

module.exports =  router;