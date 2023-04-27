const { default: mongoose } = require("mongoose");
require('dotenv').config();

const encrypt = require('mongoose-encryption');

const NewUser = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: Number, required: true},
})

NewUser.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ['password'] });

module.exports = mongoose.model('user', NewUser);