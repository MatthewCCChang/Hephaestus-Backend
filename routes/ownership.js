var express = require('express');
var ownRouter = express.Router();
const pool = require('../server/db');

ownRouter.use(express.json());

/* GET home page. */
ownRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = ownRouter;
