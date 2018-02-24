var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken'); //create, sign, verify tokens
var config = require('./config');
var User = require('./app/models/user'); //mongoose model

//config ========================================

var port = process.env.PORT || 8080; //create, sign, verify tokens

mongoose.connect(config.database); //db connect
app.set('secretSecret', config.secret); //secret var

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(morgan('dev')); //to log request on console

//route ========================================

app.get('/', function(req, res) {
    res.send('The API is at http://localhost:' + port + '/api');
})

//API routes ========================================

//server start ========================================
app.listen(port);
console.log('Something should display at http://localhost' + port);