const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();

//body parser middleware
app.use(bodyparser.json());

// connecting to mongodb
const mongouri = require('config/keys.js').mongoURI;
mongoose.connect(mongouri)
    .then( () => console.log('Connected to MongoDB'))
    .catch( err => console.log('Error while connecting to MongoDB', err));

// Starting server on port
port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));