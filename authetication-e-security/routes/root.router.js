const express = require('express');
const rootRouter = express.Router();
const path = require('path');

rootRouter.get('/', (req,res) => {
    res.status(200).render(path.join(__dirname, '..', 'views', 'home.ejs'))
})

rootRouter.get('/login', (req,res) => {
    res.status(200).render(path.join(__dirname, '..', 'views', 'login.ejs'))
})

rootRouter.get('/register', (req,res) => {
    res.status(200).render(path.join(__dirname, '..', 'views', 'register.ejs'))
})

module.exports = rootRouter;