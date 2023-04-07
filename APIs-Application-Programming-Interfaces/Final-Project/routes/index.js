const express = require("express");
const router = express.Router();
const path = require("path")

router.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "..", "public", "signup.html"));
});

router.post("/", (req,res) => {
  let data = req.body;
  console.log(data)
})

module.exports = router;
