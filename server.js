var express = require('express');
var bodyParser = require('body-parser');
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');
var cors = require('cors');

// create express app
var app = express();

//enable cors
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
mongoose.connect(dbConfig.url);


mongoose.connection.on('error', function () {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function () {
    console.log("Successfully connected to the database");
})

// define a simple route
app.get('/', function (req, res) {
    res.json({ "message": "Welcome to task management api" });
});
// Require Notes routes
require('./app/routes/task.routes.js')(app);
// listen for requests
app.listen(8080, function () {
    console.log("Server is listening on port 3000");
});