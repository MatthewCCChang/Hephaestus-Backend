var express = require('express');
var connectionRouter = express.Router();
const pool = require('../server/db');

connectionRouter.use(express.json());

/* GET home page. */
connectionRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = connectionRouter;
