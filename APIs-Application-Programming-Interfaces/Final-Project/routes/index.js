const express = require("express");
const router = express.Router();
const path = require("path");
const https = require("https");
require('dotenv').config()

router.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "..", "public", "signup.html"));
});

router.post("/", (req, res) => {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  let data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  let jsonDate = JSON.stringify(data);

  const url = `https://us21.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`

  const option = {
    method: "POST",
    auth: `walwizard:${process.env.API_KEY}`
  }

  const request = https.request(url, option, function(response) {
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    })
  })


  request.write(jsonDate);
  request.end();
});

module.exports = router;
