var express = require('express');
var deviceRouter = express.Router();
const pool = require('../server/db');

deviceRouter.use(express.json());
//create new device
deviceRouter.post('/new_device', async(req, res) => {
  try{
    const {long, lat, last, region } = req.body;
    const deviceData = [long, lat, last, region];
    const postQuery = `INSERT INTO device(longitude, latitude, last_refill, region) VALUES($1,$2,$3,$4);`;
    const status = await pool.query(postQuery, deviceData);
    res.status(200).json(status);
  }
  catch(e) {
    res.status(500).send(e.message);
  }
});

//get all the devices
deviceRouter.get('/all_device', async(req, res) => {
  try{
    const data = await pool.query(`SELECT * FROM device;`);
    res.json(data.rows);
  }catch(e){
    res.status(500).send(e.message);
  }
})

//get specific device
deviceRouter.get('/device/:id', async(req, res) => {
  try{
    const deviceId = req.params.id;
    console.log(deviceId);
    const data = await pool.query(`SELECT * FROM device WHERE id=$1;`,[deviceId]);
    res.status(200).json(data.rows);
  }catch(e){
    res.status(500).send(e.message);
  }
})

//update last_refill date

//update refills count

//update capacity

//update longitude and latitude

module.exports = deviceRouter;
