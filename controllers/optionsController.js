const Option = require('./../models/optionModel')
const Question = require('./../models/questionModel')

// Controller to add Vote 
exports.addVote = async (req, res) => {
    try {
        const option = await Option.findById(req.params.id);
        if (!option) {
            return res.status(404).json({
                success: 'failed',
                message: "Option Not Found",
            });
        }

        option.votes++;
        await option.save();

        res.json({
            success: 'success',
            message: "Option Updated successfully",
            data: {
                option: option
            }
        });
    } catch (err) {

        res.status(500).json({
            success: 'failed',
            message: "Internal Server Error",
        });
    }
}

// Contrller to delete option if there is zoro votes on it
exports.deleteOption = async (req, res) => {
    try {
        const option = await Option.findById(req.params.id);
        if (!option) {
            return res.status(404).json({
                success: 'failed',
                message: "Option Not Found",
            });
        }

        if (option.votes > 0) {
            return res.status(400).json({
                success: 'failed',
                message: "Option cannot be deleted as it has votes",
            });
        }

        await Question.findByIdAndUpdate(option.question, { $pull: { options: option._id } });

        await Option.findByIdAndDelete(req.params.id)

        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: 'failed',
            message: "Internal Server Error!",
        });
    }
}

// using exports to use all functions as object values of this file 
