const express = require('express');
const optionsController = require('./../controllers/optionsController')
const router = express.Router();

router.route('/:id/add_vote').patch(optionsController.addVote)

router.route('/:id/delete').delete(optionsController.deleteOption)


module.exports = router;