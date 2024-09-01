var express = require('express');
var sensorRouter = express.Router();
const pool = require('../server/db');

router.use(express.json());

/* GET home page. */
sensorRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = sensorRouter;
