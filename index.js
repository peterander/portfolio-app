// set up ==============
var express = require('express');
var ejs = require('ejs');

var app = express();

// PROD && DEV
app.engine('html', ejs.renderFile);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


// routes ================
var portfolio = require('./routes/portfolio.js');

app.get('/', portfolio.index);
app.listen(3000);
console.log('Listening at http://localhost:3000');