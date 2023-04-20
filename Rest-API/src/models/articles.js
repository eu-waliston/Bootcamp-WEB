const { default: mongoose } = require("mongoose");

const Articles = mongoose.Schema({
    title: {type: String, require: true},
    content: {type: String, require: true}
});

module.exports = mongoose.model('articles', Articles);
