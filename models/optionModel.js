const mongoose = require('mongoose')

// creating the option schema 
const optionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
    },
    votes: {
        type: Number,
        default: 0
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }
});

// create Option model
const Option = mongoose.model('Option', optionSchema);

module.exports = Option