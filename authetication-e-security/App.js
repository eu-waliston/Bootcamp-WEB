//jshint esversion:6
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const rootRouter = require('./routes/root.router');

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }))
api.use(cors());

api.set('view engine', 'ejs')
api.use(express.static("public"))

require('./config/database');

api.use('/', rootRouter);

api.listen(process.env.PORT, () => {
    console.log(`App Running on PORT ${process.env.PORT}`);
})