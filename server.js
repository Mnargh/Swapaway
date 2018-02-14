// change to const at a later date
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session')

// creates a connection to the database: swapaway-production
mongoose.connect('mongodb://localhost/swapaway-production')

// require routes
var index = require('./routes/index');
var users = require('./routes/users');
var items = require('./routes/items');


// server
var server = express();






// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

// uncomment after placing your favicon in /public
server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));
server.use(session({
    secret: "testing",
    saveUninitialized: true,
    resave: false
  }));

// routes
server.use('/', index);
server.use('/users', users);
server.use('/items', items);


// catch 404 and forward to error handler
server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.server.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = server;
