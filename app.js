
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
require('dotenv').config()
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { auth } = require('express-openid-connect');

const config = {
  authRequired: process.env.authRequired,
  auth0Logout: process.env.auth0Logout,
  secret: `${process.env.secret}`,
  baseURL: `${process.env.baseURL}`,
  clientID: `${process.env.clientID}`,
  issuerBaseURL: `${process.env.issuerBaseURL}`
};
var app = express();
var http = require('http').Server(app)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(auth(config));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

http.listen(process.env.port)
