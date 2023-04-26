const { default: mongoose } = require("mongoose");

const NewUser = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: Number, required: true},
})

module.exports = mongoose.model('user', NewUser);