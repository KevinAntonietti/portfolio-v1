// Require dependencies
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const helmet = require('helmet');

const router = require('./app/routers/router');

// Create express app
const app = express();

// view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// MW
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());


// Router
app.use(router);

// 404
app.get('*', function(req, res){
    res.status(404).render('404')
  });


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

// Server
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
//     });