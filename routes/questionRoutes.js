const express = require('express');
const questionsController = require('./../controllers/questionsController')
const router = express.Router();

router.route('/').get(questionsController.getQuestions);

router.route('/:id').get(questionsController.getQuestion);

router.route('/create').post(questionsController.createQuestion);

router.route('/:id/options/create').post(questionsController.createOptions);

router.route('/:id/delete').delete(questionsController.deleteQuestion);

module.exports = router;