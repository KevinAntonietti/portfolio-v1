// Require dependencies
const createError = require('http-errors');
const compression = require('compression');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const bodyParser = require('body-parser');




const router = require('./app/routers/router');

// Create express app
const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// MW
app.use(compression());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config()


// Router
app.use(router);

// 404
app.get('*', function(req, res){
    res.status(404).render('404')
  });

// favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
