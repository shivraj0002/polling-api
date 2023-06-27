const Question = require('./../models/questionModel')
const Option = require('./../models/optionModel')

// Controller for get one question with its options
exports.getQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id).populate({
            path: 'options',
            model: 'Option'
        });

        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }

        res.json(question);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to get all questions with its options
exports.getQuestions = async (req, res) => {
    try {
        const questions = await Question.find().populate({
            path: 'options',
            model: 'Option'
        });

        res.json(questions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Controller to create question
exports.createQuestion = async (req, res) => {
    try {
        const title = req.body.title;
        if (!title) throw new Error("No title provided")
        const question = await Question.create({
            title: title
        });

        res.json(question);

    } catch (err) {
        console.error('Cannot Create same question twice!📄');
        res.status(500).json({ error: 'Internal server error' });
    }
};

// controller to delete a question
exports.deleteQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }

        const optionsWithVotes = await Option.countDocuments({ _id: { $in: question.options }, votes: { $gt: 0 } });

        if (optionsWithVotes > 0) {
            return res.status(400).json({ error: 'Question cannot be deleted as one or more options have votes' });
        }

        await Question.findByIdAndDelete(req.params.id)

        for (const option of question.options) {
            await Option.findByIdAndDelete(option._id);
        }

        res.sendStatus(204);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// controller to create multiple options
exports.createOptions = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }

        const options = req.body.options;
        const createdOptions = [];

        for (const optionText of options) {
            const option = await Option.create({
                text: optionText,
                question: question._id
            });

            createdOptions.push(option);
            question.options.push(option._id);
        }

        await question.save();
        res.json(createdOptions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// using exports to use all functions as object values of this file 