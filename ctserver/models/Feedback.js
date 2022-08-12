const mongoose = require("mongoose");

const feedBack = new mongoose.Schema({
    text: {
        type: String
    }
});

const FeedBack = mongoose.model('FeedBack',feedBack);

module.exports = FeedBack;