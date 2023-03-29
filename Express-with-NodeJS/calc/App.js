const express = require('express');
const PORT = 8000;
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.post("/",  (req,res) => {

    let n1 = req.body.num1
    let n2 = req.body.num2
    let calc = n1 * n2

    res.status(200).send(`<h1>The result is: ${calc}</h1>`)
})


app.get("/bmi", (req,res) => {
    res.status(200).sendFile(path.join(__dirname, "BMI.html"))
})

app.post("/bmi", (req,res) => {
    let n1 = req.body.height
    let n2 = req.body.weight

    let bmi = (n1 * 2) / n2

    res.status(200).send(`<h1>The result is ${bmi}</h1>`)
})
app.listen(PORT, () => {
    console.log(`App listen at port ${PORT} 🚀`);
})



