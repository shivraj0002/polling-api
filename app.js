// import express
const express = require('express');

// using morgan to log the request and its details on console
const morgan = require('morgan');

// importing the routes
const questionRoutes = require('./routes/questionRoutes');
const optionRoutes = require('./routes/optionRoutes');

// creating the app 
const app = express();

// using middlewares to read request url and body
app.use(express.json());

// setting morgan option to the development 
app.use(morgan('dev'));

// using routes to handle the requests
/* Here I am following the structure of the rest api standard where the /api represents that its an api and the v1 represents the version of the api */
app.use('/api/v1/questions', questionRoutes);
app.use('/api/v1/options', optionRoutes);

// export default app
module.exports = app;