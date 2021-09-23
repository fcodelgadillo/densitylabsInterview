//database configuration

const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect("mongodb+srv://Frank:dexter86.@densityinterview.ltc9d.mongodb.net/densitylabs?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(connection => {
        console.log(`Mongo DB is connected with host ${connection.connection.host}`);
    })
}

module.exports = connectDatabase;
