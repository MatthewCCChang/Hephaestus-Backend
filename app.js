// var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

var deviceRouter = require('./routes/device');
var usersRouter = require('./routes/users');
var sensorRouter = require('./routes/sensor');
var connectionRouter = require('./routes/connection');
var userRouter = require('./routes/users');

require('dotenv').config();
const pool = require('./server/db');
var app = express();
const PORT = process.env.PORT_NUMBER || 3001;


//change for deployment
app.use(
  cors(
    {
      origin: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}`,
      credentials: true
    }
  )
);


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.get('/test',async (req, res) => {
  try{
    const device = await pool.query('SELECT * FROM device;');
    console.log(device.rows);
    res.json(device.rows);
  }catch (e) {
    console.log(e.message);
  }
});
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/device', deviceRouter);
app.use('/users', usersRouter);
app.use('/sensors', sensorRouter);
app.use('/connections', connectionRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`)
});

module.exports = app;
