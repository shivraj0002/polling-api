const mongoose = require('mongoose');

// create a new question schema object
const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    }]
})

// question model 
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;