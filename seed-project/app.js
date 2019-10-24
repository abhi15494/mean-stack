const express = require('express');
const app = express();

const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const appApiRoutes = require('./routes/app.api');
const messageApiRoutes = require('./routes/message.api');

const mongoose = require('mongoose');
const config = require('./config/config.constants');

mongoose.connect(config.database.db_path + config.database.db_name, { useNewUrlParser: true });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// To Setup middleware
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

// To handle post request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// To set and get cookies in browser
app.use(cookieParser());

// To Setup a static folder for images, js, styles etc
app.use(express.static(path.join(__dirname, 'public')));

// To Handle CORS problem issues
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', appApiRoutes);
app.use('/message', messageApiRoutes);

// catch 404 and forward to error handler
// Error handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send(err);
    return res.render('index');
});


module.exports = app;
