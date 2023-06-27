const express = require('express');
const morgan = require('morgan');
const questionRoutes = require('./routes/questionRoutes');
const optionRoutes = require('./routes/optionRoutes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/questions', questionRoutes)
app.use('/api/v1/options', optionRoutes)

module.exports = app;