var express = require('express');
var deviceRouter = express.Router();
const pool = require('../server/db');

deviceRouter.use(express.json());

/* GET home page. */
deviceRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = deviceRouter;
