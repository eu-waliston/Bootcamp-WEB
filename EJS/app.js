const bodyParser = require("body-parser");
const express = require("express");
const PORT = 8000;
const rootRouter = require("./router/root.router");

const server = express();

//middlewares
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.json());

//static files
server.use(express.static('public'))

server.set('view engine', 'ejs');

server.use("/", rootRouter)

server.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})