const express = require("express");
const api = express();
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  const today = new Date();
  const currentDay = today.getDay();
  let day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;

    case 2:
      day = "Tuesday";
      break;

    case 3:
      day = "Wednesday";
      break;

    case 4:
      day = "Thusday";
      break;

    case 5:
      day = "Friday";
      break;

    case 6:
      day = "Saturday";
      break;

    default:
      console.log(`Error: current day is equal to ${currentDay}`);
      break;
  }

  res.render("list", { kindOfday: day });
});

module.exports = router;
