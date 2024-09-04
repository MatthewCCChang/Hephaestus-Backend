var express = require('express');
var sensorRouter = express.Router();
const pool = require('../server/db');

sensorRouter.use(express.json());

/* GET all sensors. */
sensorRouter.get('/', async (req, res) => {
    try{
      const data = await pool.query(`SELECT * FROM sensor;`);
      res.status(200).json(data);
    } catch(e) {
      res.status(500).send(e.message);
    }
    
});

//create new sensor
sensorRouter.post('/', async(req, res) => {
  try{
    const data = await pool.query(`INSERT into sensor DEFAULT VALUES;`);
    res.status(200).json(data);
  } catch(e) {
    res.stauts(500).send(e.message);
  }
});

module.exports = sensorRouter;
