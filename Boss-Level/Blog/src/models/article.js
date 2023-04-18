const { default: mongoose } = require("mongoose");

const ArticlesSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    article: {type: String, required: true},
})

module.exports = mongoose.model('articles', ArticlesSchema)