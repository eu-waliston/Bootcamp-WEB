let mongoose = require('mongoose');
require('dotenv').config;

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Successfully Connected :)');
})