var express = require('express');
var userRouter = express.Router();
const pool = require('../server/db');

userRouter.use(express.json())

/* GET users listing. */
userRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = userRouter;
