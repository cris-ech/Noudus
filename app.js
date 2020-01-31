// app.js

var express = require('express');
var cors = require('cors');
const path = require('path');
var bodyParser = require('body-parser');
require('dotenv').config()

var certificate = require('./routes/certificate'); // Imports routes for the certificates
var user = require('./routes/user'); // Imports routes for the user
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = process.env.DB_URL;
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/certificates', certificate);
app.use('/user', user);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));



let port = process.env.PORT;
if (port == null || port == "") {
  port = 1234;
}


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
