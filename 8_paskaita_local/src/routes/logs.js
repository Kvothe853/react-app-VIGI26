const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

const router = express.Router();

router.get('/:id', async (req, res) => {
  console.log('hello');
  try {
    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(`
    SELECT *
    FROM logs
    WHERE pet_id = ${req.params.id}
    `);
    await con.end();

    return res.send(data);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: 'Server error. Please try again.' });
  }
});

module.exports = router;
