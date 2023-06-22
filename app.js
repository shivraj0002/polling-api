// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const morgan = require('morgan');
const questionRoutes = require('./routes/questionRoutes')

const app = express();

app.use(morgan('dev'));

app.use('/api/v1/questions', questionRoutes)

module.exports = app;