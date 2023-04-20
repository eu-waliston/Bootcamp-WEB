const express = require('express');
const cors = require('cors');
require('dotenv').config();
const rootRouter = require('./src/routes/root');

const Server = express();

//middlewares
Server.use(express.json());
Server.use(cors());
Server.use(express.urlencoded({ extended: true }));

//Views & Static
Server.set('view engine', 'ejs');
Server.use(express.static('public'));

//Db connection
require('./src/config/database');

//Routes
Server.use('/', rootRouter);

Server.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
});