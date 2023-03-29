const express = require("express");
const app = express();

const PORT = 8000;

app.get("/", (req,res) => {
    res.status(200).send("<h1>Here We Go Again!</h1>")
})

app.listen(PORT, () => {
    console.log(`Running at port ${PORT}`);
});


