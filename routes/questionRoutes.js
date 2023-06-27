const express = require('express');

// emporting questionController
const questionsController = require('./../controllers/questionsController');

// using express.Router()
const router = express.Router();

// to get all questions with its options
router.route('/').get(questionsController.getQuestions);

// to get one question with its options
router.route('/:id').get(questionsController.getQuestion);

// to create a question
router.route('/create').post(questionsController.createQuestion);

// to create options 
router.route('/:id/options/create').post(questionsController.createOptions);

// to delete a question
router.route('/:id/delete').delete(questionsController.deleteQuestion);

module.exports = router;