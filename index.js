/* jshint esversion:6 */
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//body parser middleware
// app.use(bodyparser.json());
app.use(express.json());

// connecting to mongodb
const mongouri = require('./config/keys.js').mongoURI;
mongoose.connect(mongouri)
    .then( () => console.log('Connected to MongoDB'))
    .catch( err => console.log('Error while connecting to MongoDB', err));

// Homepage route
app.get('/' ,(req,res) => {
    res.send("Welcome to shooping app");
});

// use routes
const items = require('./routes/api/items.js');
app.use('/api/items' , items);

// Starting server on port
port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));