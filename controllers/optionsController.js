const Option = require('./../models/optionModel')
const Question = require('./../models/questionModel')

exports.addVote = async (req, res) => {
    try {
        const option = await Option.findById(req.params.id);
        if (!option) {
            return res.status(404).json({ error: 'Option not found' });
        }

        option.votes++;
        await option.save();

        res.json(option);
    } catch (err) {

        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.deleteOption = async (req, res) => {
    try {
        const option = await Option.findById(req.params.id);
        if (!option) {
            return res.status(404).json({ error: 'Option not found' });
        }

        if (option.votes > 0) {
            return res.status(400).json({ error: 'Option cannot be deleted as it has votes' });
        }

        const question = await Question.findByIdAndUpdate(option.question, { $pull: { options: option._id } });
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }

        await Option.findByIdAndDelete(req.params.id)

        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}