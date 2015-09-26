var express = require('express');
var restful = require('node-restful');
var mongoose = restful.mongoose;

var app = express();

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

mongoose.connect('mongodb://localhost/restful');

var Schema = mongoose.Schema;