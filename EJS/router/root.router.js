const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/", (req,res) => {

    const today = new Date();
    const currentDay = today.getDay();

    currentDay === 6 || currentDay === 0 ? res.sendFile(path.join(__dirname, "..", "index.html")) : res.sendFile(path.join(__dirname, "..", "index.html")) 
})



module.exports = router;