// var createError = require('http-errors');
const express = require('express');
const path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

const indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// app.use(logger('dev'));
// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

// Route setup
app.use('/', indexRouter);
// app.use('/users', usersRouter);

// view engine setup
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
// 	next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get('env') === 'development' ? err : {};

// 	// render the error page
// 	res.status(err.status || 500);
// 	res.render('error');
// });

module.exports = app;
