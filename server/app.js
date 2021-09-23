// requiring express
const express = require('express');


// app creation
const app = express();
const errorMiddleware = require('./middlewares/errors')

// import all routes
const comments = require('./routes/comment');


// we ask app to use json for data interchanging
app.use(express.json());


// using routes in app
app.use('/api/v1', comments)


// Middleware to handle errors
app.use(errorMiddleware);



// app export
module.exports = app;
