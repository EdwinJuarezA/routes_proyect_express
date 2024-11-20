const express = require('express');
const verifyToken = require('../middleware/auth'); 
const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  res.status(200).send({ message: 'Este es un endpoint protegido.' });
});

module.exports = router;
