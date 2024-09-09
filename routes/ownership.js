var express = require('express');
var ownRouter = express.Router();
const pool = require('../server/db');

ownRouter.use(express.json());

//get all devices user owns with basic info
ownRouter.get('/:owner_id', async(req, res) => {
  try{
    const {owner_id} = req.params;
    const query = await pool.query(`SELECT d.id, d.capacity, d.last_refill FROM device as d 
      INNER JOIN owns ON d.id=owns.device_id WHERE owns.owner_id=$1;`,[owner_id]);
    res.status(200).json(query.rows);
  }catch(e) {
    res.status(500).send(e.message);
  }
});

//create new ownership
ownRouter.post('/', async(req, res) => {
  try{
    const {owner_id, device_id} = req.body;
    const data = [owner_id, device_id];
    const query = await pool.query('INSERT INTO owns VALUES($1, $2);',data);
    res.status(200).json(query);
  }catch(e) {
    res.status(500).send(e.message);
  }
})

//delete ownership
ownRouter.delete('/', async(req, res) => {
  try{
    const {owner_id, device_id} = req.body;
    const data =[owner_id, device_id];
    const query = await pool.query(`DELETE FROM owns WHERE owner_id=$1 AND device_id=$2;`, data);
    res.status(200).json(query);
  }catch(e) {
    res.status(500).send(e.message);
  }
})


module.exports = ownRouter;
