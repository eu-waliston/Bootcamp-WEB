const express = require("express");
const https = require("https");
require("dotenv").config();

const router = express.Router();

router.get("/", (req, res) => {
  const URL = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Brazil&aqi=no`;

  https.get(URL, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherList = JSON.parse(data);
      let city = weatherList.location.name;
      let region = weatherList.location.region;
      let country = weatherList.location.country;

      res.write(`<h1>Local: <br /> ${city} </h1>`);
      res.write(`<h1>Region: <br /> ${region} </h1>`);
      res.write(`<h1>Country: <br /> ${country} </h1>`);

      let temp_c = weatherList.current.temp_c;
      let cond = weatherList.current.condition.text;
      let icon = weatherList.current.condition.icon;

      res.write(`<h1>Temperatura: <br /> ${temp_c} </h1>`);
      res.write(`<h1>Condition: <br /> ${cond} </h1>`);
      res.write(`<img alt="icon" src=${icon} />`)


      res.send();

      console.log(weatherList);
    });
  });
});

module.exports = router;
