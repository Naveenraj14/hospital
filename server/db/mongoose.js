var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://naveenraj9622:<db_password>@cluster0.xatsrre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

module.exports = {mongoose};
