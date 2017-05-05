'use strict';

var path = require('path');
var express = require('express');
var app = express();

var morgan = require('morgan');
var logger = morgan('dev');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../')));

// if no routes match, this line servers up index.html
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

var port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log('The server is listening on port', port);
});
