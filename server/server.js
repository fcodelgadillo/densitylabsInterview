// import app
const app = require('./app');

// database config import
const connectDatabase = require('./config/database');

// dotenv for env variables
const dotenv = require('dotenv');


// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception');
    process.exit(1);
})

//config file
dotenv.config( { path: 'backend/config/.env' } );

// database connection
connectDatabase();

// port & env mode
const port = process.env.PORT || 4000;


//app running
const server = app.listen(port, () => {
    console.log(`server started on PORT: ${port}`)
})

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise Rejection');
    server.close(() => {
        process.exit(1)
    })
})
