const express = require("express");
const app = express();

const PORT = 8000;

app.get("/", (req,res) => {
    res.status(200).send("<h1>Here We Go Again!</h1>")
})

app.get("/contact", (req,res) => {
    res.status(200).send("<h1>Contact me at: wesantosdev@gmail.com</h1>")
})

app.get("/about", (req,res) => {
    res.status(200).send("<h1>Hi!</h1> <br> <h2>I'm, Waliston</h2><br> <h2>A Developer from brazil</h2> <br> <h2>I love Wine 🍷  and code 💻 </h2>")
})

app.get("/hobbies",  (req,res) => {
    res.status(200).send("<ul><p>My Hobbies:</p>  <br/> <li>animes</li> <li>doramas</li> <li>series</li> <li>gamnes</li> <li>mangas</li>  </ul>")
})

app.listen(PORT, () => {
    console.log(`Running at port ${PORT}`);
});


