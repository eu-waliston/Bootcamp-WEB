const { default: mongoose } = require("mongoose");
require('dotenv').config();

const passportLocalMongoose = require('passport-local-mongoose');
// const encrypt = require('mongoose-encryption');

const NewUser = new mongoose.Schema({
    email: {type: String},
    password: {type: String},
})

// NewUser.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ['password'] });
NewUser.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', NewUser);