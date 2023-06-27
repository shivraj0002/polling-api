// The Server Logic should be seperat from app so I am creating Server.js here
// import app 
const app = require('./app');

// import donenv to use environment variables
const dotenv = require('dotenv');

// configuration for config.env
dotenv.config({ path: './config.env' });

// import mongoose connection file
const mongoose = require('./models/mongoose');

// defining the port to 8000
const port = 8000;

// now to start the event loop we need to listen on port 8000
app.listen(port, () => {
    console.log('listening on port: ', port);
});