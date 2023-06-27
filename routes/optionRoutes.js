const express = require('express');

// importing the questionController
const optionsController = require('./../controllers/optionsController')
const router = express.Router();

// to add vote to option
router.route('/:id/add_vote').patch(optionsController.addVote)

// to delete option
router.route('/:id/delete').delete(optionsController.deleteOption)


module.exports = router;