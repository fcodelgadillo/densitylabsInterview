// create comment Schema

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true,
        maxlength: [25, "Name field cannot be blank"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        maxlength: [25, "Email field cannot be blank"]
    },
    comment: {
        type: String,
        required: [true, "Please enter your comments"],
        maxlength: [500, "Comment field cannot be blank"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Comment', commentSchema);
