const Question = require('./../models/questionModel')

exports.getQuestion = (req, res) => {
    res.send("From controller")
};

exports.createQuestion = async (req, res) => {
    try {
        const title = req.body.title;
        if (!title) throw new Error("No title provided")
        const question = await Question.create({
            title: title
        });
        // await question.save();
        res.json(question);
        // res.json({ title });
    } catch (err) {
        console.error("Cannot Create same question twice!📄");
        res.status(500).json({ error: 'Internal server error' });
    }
};