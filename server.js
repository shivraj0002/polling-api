const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const mongoose = require('./models/mongoose');
const port = 8000;

app.listen(port, () => {
    console.log('listening on port: ', port);
});